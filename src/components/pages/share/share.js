import React, {Component} from 'react'
import './share.css'
import {Languages} from '../../../languages'
import {
  Icon,
  Step,
  Card,
  Form,
  Input,
  Button,
  Select,
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
      createTorrentFormData: {
        name: '',
        description: '',
        size: '',
        info_link: '',
        info_hash: '',
        screens: [],
        tag: {
          name: '',
          categories: []
        },
        languages: {
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
    this.setState({emailChangeFormData: mockCreateTorrentFormData})
  }

  createTorrent = (event) => {
    CreateTorrent(this.state.user.id, this.state.emailChangeFormData, [
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

    const categories = [
      {
        key: '0',
        text: 'movies',
        value: 'movies'
      }, {
        key: '1',
        text: 'tv/shows',
        value: 'tv/shows'
      }, {
        key: '2',
        text: 'games',
        value: 'games'
      }, {
        key: '3',
        text: 'music',
        value: 'music'
      }, {
        key: '4',
        text: 'applications',
        value: 'applications'
      }, {
        key: '5',
        text: 'documents',
        value: 'documents'
      }, {
        key: '6',
        text: 'movies',
        value: 'movies'
      }, {
        key: '7',
        text: 'xxx',
        value: 'xxx'
      }
    ]

    const tags = []

    return (<div className='share-section'>
      <Card centered className='step-card'>
        <Card.Content>
          <Step.Group className='step-group'>
            <Step active={active === 'Torrent Info'} icon='paw' link='link'
              onClick={this.titleClick} title='Torrent Info' description='Info hash or file' />
            <Step active={active === 'Trackers'} icon='find' link='link'
              onClick={this.titleClick} title='Trackers' description='Set trackers' />
            <Step active={active === 'Additional Info'} icon='info' link='link'
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
                <Input placeholder='info hash'
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
                <Form.Field control={Select} label='category' options={categories} placeholder='Select a category'
                  value={this.state.createTorrentFormData.tag.name} onChange={this.createTorrentFormHandleChange} />
                <Form.Field control={Select} label='tags' options={tags} placeholder='Select a tag'
                  value={this.state.createTorrentFormData.tag.categories} onChange={this.createTorrentFormHandleChange} />
              </Form.Group>
              <Form.Field>
                <label>info link</label>
                <Input label='http://' placeholder='mysite.com'
                  value={this.state.createTorrentFormData.info_link} onChange={this.createTorrentFormHandleChange} />
              </Form.Field>
              <Form.Field label='name' control={Input} placeholder='name'
                value={this.state.createTorrentFormData.name} onChange={this.createTorrentFormHandleChange} />
              <Segment inverted color='yellow'>
                <Input fluid size='medium' placeholder='search movie or paset link'
                  action={{ color: 'black', labelPosition: 'left', icon: 'search', content: 'IMDb' }}
                  actionPosition='left'
                  icon={{ name: 'check circle', circular: true, color: 'green' }}
                  value={this.state.createTorrentFormData.info_link} onChange={this.createTorrentFormHandleChange} />
              </Segment>
            </div>
            {/* Step Torrent Info End */}

            {/* Step Trackers */}
            <div style={{display: this.state.stepTrackers}}>
              <Form.Field label='trackers' control='textarea' placeholder='tracker list'
                value={this.state.createTorrentFormData.trackers} onChange={this.createTorrentFormHandleChange} />
            </div>
            {/* Step Trackers End */}

            {/* Step Additional Info */}
            <div style={{display: this.state.stepAdditionalInfo}}>
              <Form.Field label='description' control='textarea' placeholder='describe file'
                value={this.state.createTorrentFormData.description} onChange={this.createTorrentFormHandleChange} />
              <Form.Field label='screens' control='textarea' placeholder='give links line by line'
                value={this.state.createTorrentFormData.screens} onChange={this.createTorrentFormHandleChange} />
              <Form.Group widths='equal'>
                <Dropdown placeholder='Select Audios' className='dropdown' fluid multiple search selection options={Languages}
                  value={this.state.createTorrentFormData.languages.audios} onChange={this.createTorrentFormHandleChange} />
                <Dropdown placeholder='Select Subtitles' className='dropdown' fluid multiple search selection options={Languages}
                  value={this.state.createTorrentFormData.languages.subtitles} onChange={this.createTorrentFormHandleChange} />
              </Form.Group>
            </div>
            {/* Step Additional Info End */}

            <Button.Group attached='bottom' className='stepperButtons'>
              <Button onClick={this.previous} style={{display: this.state.previous}}>
                <Icon color='black' name='arrow circle left' />Previous
              </Button>
              <Button onClick={this.next} style={{display: this.state.next}}>
                Next<Icon color='black' name='arrow circle right' />
              </Button>
              <Button onClick={this.share} style={{display: this.state.stepAdditionalInfo}}>
                Share<Icon color='black' name='arrow circle right' />
              </Button>
            </Button.Group>
          </Form>
        </Card.Content>
      </Card></div>)
  }
}
