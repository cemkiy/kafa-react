import React, {Component} from 'react'
import './share.css';
import {Languages} from '../../../languages';
import {
  Icon,
  Step,
  Card,
  Form,
  Input,
  Button,
  Select,
  Message,
  Dropdown
} from 'semantic-ui-react'

export default class UploadTorrent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepTorrentInfo: 'block',
      stepTrackers: 'none',
      stepAdditionalInfo: 'none',
      active: 'Torrent Info',
      next: 'block',
      previous: 'none'
    };
    this.refreshForm = this.refreshForm.bind(this);
  }

  refreshForm = () => {
    if (this.state.active === 'Torrent Info') {
      this.setState({stepTorrentInfo: "block", stepTrackers: "none", stepAdditionalInfo: "none", next: 'block', previous: 'none'});
    } else if (this.state.active === 'Trackers') {
      this.setState({stepTorrentInfo: "none", stepTrackers: "block", stepAdditionalInfo: "none", next: 'block', previous: 'block'});
    } else if (this.state.active === 'Additional Info') {
      this.setState({stepTorrentInfo: "none", stepTrackers: "none", stepAdditionalInfo: "block", next: 'none', previous: 'block'});
    }
  }

  titleClick = (e, {title}) => {
    this.setState({
      active: title
    }, this.refreshForm);
  }

  next = () => {
    if (this.state.active === 'Torrent Info') {
      this.setState({
        active: 'Trackers'
      }, this.refreshForm);
    } else if (this.state.active === 'Trackers') {
      this.setState({
        active: 'Additional Info'
      }, this.refreshForm);
    }
  }

  previous = () => {
    if (this.state.active === 'Trackers') {
      this.setState({
        active: 'Torrent Info'
      }, this.refreshForm);
    } else if (this.state.active === 'Additional Info') {
      this.setState({
        active: 'Trackers'
      }, this.refreshForm);
    }
  }

  share = () => {
    console.log("create");
  }

  render() {
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
    ];

    const tags = [];

    return (<Card centered="centered" className='step-card'>
      <Card.Content >
        <Step.Group className='step-group'>
          <Step active={active === 'Torrent Info'} icon='paw' link="link" onClick={this.titleClick} title='Torrent Info' description='Info hash or file'/>
          <Step active={active === 'Trackers'} icon='find' link="link" onClick={this.titleClick} title='Trackers' description='Set trackers'/>
          <Step active={active === 'Additional Info'} icon='info' link="link" onClick={this.titleClick} title='Additional Info' description='File promotoin link'/>
        </Step.Group>
        <Form>
          {/* Step Torrent Info */}
          <div style={{
              display: this.state.stepTorrentInfo
            }}>
            <Message >
              <Message.Header>
                Share your file
              </Message.Header>
              with input file hash &nbsp;
              <Input placeholder='info hash'/>
              &nbsp; or &nbsp;
              <label htmlFor="torrentFile" className="ui icon button">
                <i className="file icon"></i>
                upload .torrent file
              </label>
              or directly &nbsp;
              <label htmlFor="directlyFile" className="ui icon button">
                <i className="folder icon"></i>
                upload your file or folders
              </label>
              <input type="file" id="torrentFile" className='uploadButton'/>
              <input type="file" id="directlyFile" className='uploadButton'/>
            </Message>
            <Form.Group widths='equal'>
              <Form.Field control={Select} label='category' options={categories} placeholder='Select a category'/>
              <Form.Field control={Select} label='tags' options={tags} placeholder='Select a tag'/>
            </Form.Group>
            <Form.Field>
              <label>info link</label>
              <Input label='http://' placeholder='mysite.com'/>
            </Form.Field>
            <Form.Field label='name' control={Input} placeholder='file name'/>
          </div>
          {/* Step Torrent Info End */}

          {/* Step Trackers */}
          <div style={{
              display: this.state.stepTrackers
            }}>
            <Form.Field label='trackers' control='textarea' placeholder='tracker list'/>
          </div>
          {/* Step Trackers End */}

          {/* Step Additional Info */}
          <div style={{
              display: this.state.stepAdditionalInfo
            }}>
            <Form.Field label='about' control='textarea' placeholder='describe file'/>
            <Form.Field label='screens' control='textarea' placeholder='give links line by line'/>
            <Form.Group widths='equal'>
              <Dropdown placeholder='Select Audios' className='dropdown' fluid="fluid" multiple="multiple" search="search" selection="selection" options={Languages}/>
              <Dropdown placeholder='Select Subtitles' className='dropdown' fluid="fluid" multiple="multiple" search="search" selection="selection" options={Languages}/>
            </Form.Group>
          </div>
          {/* Step Additional Info End */}

          <Button.Group attached='bottom' className='stepperButtons'>
            <Button onClick={this.previous} style={{
                display: this.state.previous
              }}><Icon color='black' name='arrow circle left'/>Previous</Button>
            <Button onClick={this.next} style={{
                display: this.state.next
              }}>Next<Icon color='black' name='arrow circle right'/></Button>
            <Button onClick={this.share} style={{
                display: this.state.stepAdditionalInfo
              }}>Share<Icon color='black' name='arrow circle right'/></Button>
          </Button.Group>
        </Form>
      </Card.Content>
    </Card>)
  }
}
