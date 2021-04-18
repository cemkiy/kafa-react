import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Icon,
  Message
} from 'semantic-ui-react'

export default class ServerError extends Component {
  render () {
    return (
      <div className='center'>
        <Message attached>
          <Message.Header color='black'>500 Server Error!</Message.Header>
          <p>
            Batten Down the Hatches!
          </p>
          <Message.List>
            <Message.Item>Please try again</Message.Item>
            <Message.Item>Or contact us</Message.Item>
            <Message.Item>Or wait for solve problem.</Message.Item>
          </Message.List>
        </Message>

        <Link to='/'>
          <Message attached='bottom' color='black'>
            <Icon name='external' />
            Click and go to deck page
          </Message>
        </Link>
      </div>
    )
  }
}
