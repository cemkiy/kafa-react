import React, {Component} from 'react'
import './torrent-form.css'
import {TagNames, TagCategories} from '../../../categories'
import {Languages} from '../../../languages'
import {
  Icon,
  Step,
  Card,
  Form,
  Input,
  Button,
  Message,
  Dropdown,
  Segment
} from 'semantic-ui-react'
import {CreateTorrent, UpdateTorrent} from '../../../api/torrent'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class TorrentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mode: 'create',
      formResultDisplay: 'none',
      stepTorrentInfo: 'block',
      stepTrackers: 'none',
      stepAdditionalInfo: 'none',
      active: 'Torrent Info',
      next: 'block',
      previous: 'none',
      imdbLink: 'none',
      infoLink: 'block',
      torrentFormData: {
        user_id: JSON.parse(window.localStorage.getItem('user')).id,
        name: '',
        description: '',
        size: 0,
        info_link: '',
        info_hash: '',
        screens: [],
        tag: {
          name: '',
          categories: []
        },
        language: {
          audios: [],
          subtitles: []
        }
      }
    }
  }

  refreshForm = () => {
    if (this.state.active === 'Torrent Info') {
      this.setState({
        stepTorrentInfo: 'block',
        stepTrackers: 'none',
        stepAdditionalInfo: 'none',
        next: 'block',
        previous: 'none'
      })
    } else if (this.state.active === 'Trackers') {
      this.setState({
        stepTorrentInfo: 'none',
        stepTrackers: 'block',
        stepAdditionalInfo: 'none',
        next: 'block',
        previous: 'block'
      })
    } else if (this.state.active === 'Additional Info') {
      this.setState({
        stepTorrentInfo: 'none',
        stepTrackers: 'none',
        stepAdditionalInfo: 'block',
        next: 'none',
        previous: 'block'
      })
    }
  }

  titleClick = (e, {title}) => {
    this.setState({
      active: title
    }, this.refreshForm)
  }

  next = () => {
    if (this.state.active === 'Torrent Info') {
      this.setState({
        active: 'Trackers'
      }, this.refreshForm)
    } else if (this.state.active === 'Trackers') {
      this.setState({
        active: 'Additional Info'
      }, this.refreshForm)
    }
  }

  previous = () => {
    if (this.state.active === 'Trackers') {
      this.setState({
        active: 'Torrent Info'
      }, this.refreshForm)
    } else if (this.state.active === 'Additional Info') {
      this.setState({
        active: 'Trackers'
      }, this.refreshForm)
    }
  }

  torrentFormHandleChange = (event, data) => {
    let mockCreateTorrentFormData = this.state.torrentFormData
    mockCreateTorrentFormData[data.name] = event.target.value
    this.setState({torrentFormData: mockCreateTorrentFormData})
  }

  torrentFormSelectHandleChange = (event, data) => {
    let mockCreateTorrentFormData = this.state.torrentFormData
    if (data.name === 'tag_name') {
      mockCreateTorrentFormData.tag.name = data.value
    } else if (data.name === 'tag_categories') {
      mockCreateTorrentFormData.tag.categories = data.value
    } else if (data.name === 'language_audios') {
      mockCreateTorrentFormData.language.audios = data.value
    } else if (data.name === 'language_subtitles') {
      mockCreateTorrentFormData.language.subtitles = data.value
    }
    this.setState({torrentFormData: mockCreateTorrentFormData}, () => {
      if (['movies', 'tv/shows'].indexOf(this.state.torrentFormData.tag.name) > -1) {
        this.setState({imdbLink: 'block', infoLink: 'none'})
      } else {
        this.setState({infoLink: 'block', imdbLink: 'none'})
      }
    })
  }

  createTorrent = (event) => {
    let mockTorrentData = this.state.torrentFormData
    mockTorrentData.screens = mockTorrentData.screens.toString().split(',')
    CreateTorrent(mockTorrentData, [
      'id'
    ]).then(data => {
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'green',
        formResultHeader: 'Torrent Created',
        formResultDescription: 'Now listed.'
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'red',
        formResultHeader: 'Create Torrent Failed',
        formResultDescription: err.response.errors[0].message
      })
    })
    event.preventDefault()
  }

  updateTorrent = (event) => {
    let torrentId = this.state.torrentFormData.id
    let mockTorrentData = this.state.torrentFormData
    mockTorrentData.screens = mockTorrentData.screens.toString().split(',')
    mockTorrentData.user_id = this.state.torrentFormData.user.id
    delete mockTorrentData.id
    delete mockTorrentData.user
    Object.keys(mockTorrentData).forEach((key) => (mockTorrentData[key] == null) && delete mockTorrentData[key])
    UpdateTorrent(torrentId, mockTorrentData, [
      'id'
    ]).then(data => {
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'green',
        formResultHeader: 'Torrent Updated',
        formResultDescription: 'Now listed.'
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'red',
        formResultHeader: 'Update Torrent Failed',
        formResultDescription: err.response.errors[0].message
      })
    })
    event.preventDefault()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.torrent) {
      this.setState({mode: 'update', torrentFormData: nextProps.torrent})
    }
  }

  render = () => {
    const {active} = this.state

    return (<Card centered className='step-card'>
      <Card.Content>
        <Step.Group className='step-group'>
          <Step active={active === 'Torrent Info'} icon='paw' link
            onClick={this.titleClick} title='Torrent Info' description='Info hash or file' />
          <Step active={active === 'Trackers'} icon='find' link
            onClick={this.titleClick} title='Trackers' description='Set trackers' />
          <Step active={active === 'Additional Info'} icon='info' link
            onClick={this.titleClick} title='Additional Info' description='File promotoin link' />
        </Step.Group>
        <Form>
          {/* Step Torrent Info */}
          <div style={{display: this.state.stepTorrentInfo}}>
            <Message >
              <Message.Header>
                Share your file
              </Message.Header>
              with input file hash &nbsp;
              <Input name='info_hash' placeholder='info hash' required
                value={this.state.torrentFormData.info_hash} onChange={this.torrentFormHandleChange} />
              &nbsp;or &nbsp;
              <label htmlFor='torrentFile' className='ui icon button'>
                <i className='file icon' />
                upload .torrent file
              </label>
              or directly &nbsp;
              <label htmlFor='directlyFile' className='ui icon button'>
                <i className='folder icon' />
                upload your file or folders
              </label>
              <input type='file' id='torrentFile' className='uploadButton' />
              <input type='file' id='directlyFile' className='uploadButton' />
            </Message>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>select tag</label>
                <Dropdown name='tag_name' placeholder='select category' fluid selection options={TagNames}
                  value={this.state.torrentFormData.tag.name} onChange={this.torrentFormSelectHandleChange} required />
              </Form.Field>
              <Form.Field>
                <label>select categories</label>
                <Dropdown name='tag_categories' placeholder='select tags' fluid search multiple selection options={TagCategories}
                  value={this.state.torrentFormData.tag.categories} onChange={this.torrentFormSelectHandleChange} required />
              </Form.Field>
            </Form.Group>
            <Form.Field style={{display: this.state.infoLink}}>
              <label>info link</label>
              <Input label='http://' placeholder='mysite.com' name='info_link'
                value={this.state.torrentFormData.info_link} onChange={this.torrentFormHandleChange} />
            </Form.Field>
            <Segment inverted color='yellow' style={{display: this.state.imdbLink}}>
              <Input fluid size='medium' placeholder='search movie or paset link'
                action={{ color: 'black', labelPosition: 'left', icon: 'search', content: 'IMDb' }}
                actionPosition='left'
                icon={{ name: 'circle notched', circular: true, color: 'green', loading: true }}
                value={this.state.torrentFormData.info_link} onChange={this.torrentFormHandleChange} />
            </Segment>
            <Form.Field label='name' name='name' control={Input} placeholder='name'
              value={this.state.torrentFormData.name} onChange={this.torrentFormHandleChange} required />
          </div>
          {/* Step Torrent Info End */}

          {/* Step Trackers */}
          <div style={{display: this.state.stepTrackers}}>
            <Form.TextArea label='trackers' name='trackers' placeholder='tracker list'
              value={this.state.torrentFormData.trackers} onChange={this.torrentFormHandleChange} />
          </div>
          {/* Step Trackers End */}

          {/* Step Additional Info */}
          <div style={{display: this.state.stepAdditionalInfo}}>
            <Form.TextArea label='description' name='description' placeholder='describe file'
              value={this.state.torrentFormData.description} onChange={this.torrentFormHandleChange} />
            <Form.TextArea label='screens' name='screens' placeholder='give links line by line'
              value={this.state.torrentFormData.screens} onChange={this.torrentFormHandleChange} />
            <Form.Group widths='equal'>
              <Dropdown placeholder='Select Audios' name='language_audios' className='dropdown' fluid multiple search selection options={Languages}
                value={this.state.torrentFormData.language.audios} onChange={this.torrentFormSelectHandleChange} required />
              <Dropdown placeholder='Select Subtitles' name='language_subtitles' className='dropdown' fluid multiple search selection options={Languages}
                value={this.state.torrentFormData.language.subtitles} onChange={this.torrentFormSelectHandleChange} required />
            </Form.Group>
          </div>
          {/* Step Additional Info End */}

          <Message color={this.state.formResultType} style={{display: this.state.formResultDisplay}}>
            <Message.Header>{this.state.formResultHeader}</Message.Header>
            <p>{this.state.formResultDescription}</p>
          </Message>

          <Button.Group attached='bottom' className='stepperButtons'>
            <Button className='action-button' onClick={this.previous} style={{display: this.state.previous}}>
              <Icon color='black' name='arrow circle left' />Previous
            </Button>
            <Button className='action-button' onClick={this.next} style={{display: this.state.next}}>
                Next<Icon color='black' name='arrow circle right' />
            </Button>
            {this.state.mode === 'create' ? <Button className='action-button' onClick={this.createTorrent}
              style={{display: this.state.stepAdditionalInfo}}>
                  Share<Icon color='black' name='share square right' />
            </Button> : null}
            {this.state.mode === 'update' ? <Button className='action-button' onClick={this.updateTorrent}
              style={{display: this.state.stepAdditionalInfo}}>
                  Update<Icon color='black' name='edit right' />
            </Button> : null}
          </Button.Group>
        </Form>
      </Card.Content>
    </Card>)
  }
}
