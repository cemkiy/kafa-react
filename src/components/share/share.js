import React, { Component } from 'react'
import './share.css';
import { Icon, Step, Card, Form, Input, Button } from 'semantic-ui-react'

export default class UploadTorrent extends Component {
  state = {}

  handleClick = (e, { title }) => this.setState({ active: title })

  render() {
    const { active } = this.state

    return (
      <Card centered className='step-card'>
        <Card.Content >
          <Step.Group className='step-group'>
            <Step
              active={active === 'Torrent Info'}
              icon='paw'
              link
              onClick={this.handleClick}
              title='Torrent Info'
              description='Info hash or file'
            />
            <Step
              active={active === 'Trackers'}
              icon='find'
              link
              onClick={this.handleClick}
              title='Trackers'
              description='Set trackers'
            />
            <Step
              active={active === 'Additional'}
              icon='info'
              link
              onClick={this.handleClick}
              title='Additional'
              description='File promotoin link'
            />
          </Step.Group>
          <Form>
            <Form.Field>
              <label>Share with torrent file</label>
              <Input type="file" name="torrent"/>
            </Form.Field>
            <Form.Field label='name' control='input' placeholder='file name' />
            <Form.Group widths='equal'>
              <Form.Field label='info hash' control='input' placeholder='hash' />
              <Form.Field>
                <label>size</label>
                <Input
                  label={{ basic: true, content: 'byte' }}
                  labelPosition='right'
                  placeholder='enter weight...'
                />
              </Form.Field>
            </Form.Group>
            <Form.Field label='about' control='textarea' placeholder='describe file' />
            <Form.Field label='trackers' control='textarea' placeholder='trackers' />
            <Button.Group attached='bottom'>
              <Button><Icon color='black' name='arrow circle left' />Previous</Button>
              <Button>Next<Icon color='black' name='arrow circle right' /></Button>
            </Button.Group>
          </Form>
        </Card.Content>
      </Card>

    )
  }
}
