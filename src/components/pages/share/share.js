import React, {Component} from 'react'
import './share.css'
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
import {CreateTorrent} from '../../../api/torrent'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class UploadTorrent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stepTorrentInfo: 'block',
      stepTrackers: 'none',
      stepAdditionalInfo: 'none',
      active: 'Torrent Info',
      next: 'block',
      previous: 'none',
      imdbLink: 'none',
      infoLink: 'block',
      createTorrentFormData: {
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

  createTorrentFormHandleChange = (event, data) => {
    let mockCreateTorrentFormData = this.state.createTorrentFormData
    mockCreateTorrentFormData[data.name] = event.target.value
    this.setState({createTorrentFormData: mockCreateTorrentFormData})
  }

  createTorrentFormSelectHandleChange = (event, data) => {
    let mockCreateTorrentFormData = this.state.createTorrentFormData
    if (data.name === 'tag_name') {
      mockCreateTorrentFormData.tag.name = data.value
    } else if (data.name === 'tag_categories') {
      mockCreateTorrentFormData.tag.categories = data.value
    } else if (data.name === 'language_audios') {
      mockCreateTorrentFormData.language.audios = data.value
    } else if (data.name === 'language_subtitles') {
      mockCreateTorrentFormData.language.subtitles = data.value
    }
    this.setState({createTorrentFormData: mockCreateTorrentFormData}, () => {
      if (['movies', 'tv/shows'].indexOf(this.state.createTorrentFormData.tag.name) > -1) {
        this.setState({imdbLink: 'block', infoLink: 'none'})
      } else {
        this.setState({infoLink: 'block', imdbLink: 'none'})
      }
    })
  }

  createTorrent = (event) => {
    CreateTorrent(this.state.createTorrentFormData, [
      'id'
    ]).then(data => {
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'yellow',
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

  render = () => {
    const {active} = this.state

    return (<div className='share-section'>
      <Card centered className='step-card'>
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
                  value={this.state.createTorrentFormData.info_hash} onChange={this.createTorrentFormHandleChange} />
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
                    value={this.state.createTorrentFormData.tag.name} onChange={this.createTorrentFormSelectHandleChange} required />
                </Form.Field>
                <Form.Field>
                  <label>select categories</label>
                  <Dropdown name='tag_categories' placeholder='select tags' fluid search multiple selection options={TagCategories}
                    value={this.state.createTorrentFormData.tag.categories} onChange={this.createTorrentFormSelectHandleChange} required />
                </Form.Field>
              </Form.Group>
              <Form.Field style={{display: this.state.infoLink}}>
                <label>info link</label>
                <Input label='http://' placeholder='mysite.com' name='info_link'
                  value={this.state.createTorrentFormData.info_link} onChange={this.createTorrentFormHandleChange} />
              </Form.Field>
              <Segment inverted color='yellow' style={{display: this.state.imdbLink}}>
                <Input fluid size='medium' placeholder='search movie or paset link'
                  action={{ color: 'black', labelPosition: 'left', icon: 'search', content: 'IMDb' }}
                  actionPosition='left'
                  icon={{ name: 'circle notched', circular: true, color: 'green', loading: true }}
                  value={this.state.createTorrentFormData.info_link} onChange={this.createTorrentFormHandleChange} />
              </Segment>
              <Form.Field label='name' name='name' control={Input} placeholder='name'
                value={this.state.createTorrentFormData.name} onChange={this.createTorrentFormHandleChange} required />
            </div>
            {/* Step Torrent Info End */}

            {/* Step Trackers */}
            <div style={{display: this.state.stepTrackers}}>
              <Form.Field label='trackers' name='trackers' control='textarea' placeholder='tracker list'
                value={this.state.createTorrentFormData.trackers} onChange={this.createTorrentFormHandleChange} />
            </div>
            {/* Step Trackers End */}

            {/* Step Additional Info */}
            <div style={{display: this.state.stepAdditionalInfo}}>
              <Form.Field label='description' name='description' control='textarea' placeholder='describe file'
                value={this.state.createTorrentFormData.description} onChange={this.createTorrentFormHandleChange} />
              <Form.Field label='screens' name='screens' control='textarea' placeholder='give links line by line'
                value={this.state.createTorrentFormData.screens} onChange={this.createTorrentFormHandleChange} />
              <Form.Group widths='equal'>
                <Dropdown placeholder='Select Audios' name='language_audios' className='dropdown' fluid multiple search selection options={Languages}
                  value={this.state.createTorrentFormData.language.audios} onChange={this.createTorrentFormSelectHandleChange} required />
                <Dropdown placeholder='Select Subtitles' name='language_subtitles' className='dropdown' fluid multiple search selection options={Languages}
                  value={this.state.createTorrentFormData.language.subtitles} onChange={this.createTorrentFormSelectHandleChange} required />
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
              <Button className='action-button' onClick={this.createTorrent} style={{display: this.state.stepAdditionalInfo}}>
                Share&nbsp;<Icon color='black' name='share' />
              </Button>
            </Button.Group>
          </Form>
        </Card.Content>
      </Card></div>)
  }
}
