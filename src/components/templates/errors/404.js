import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import tylerDurden from '../../../assets/img/tylerDurden.jpg'
import {
  Icon,
  Image,
  Message
} from 'semantic-ui-react'

export default class NotFound extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayImg: 'none',
      displayMessage: 'block'
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ displayImg: 'block', displayMessage: 'none' })
      setTimeout(() => {
        this.setState({ displayImg: 'none', displayMessage: 'block' })
      }, 100)
    }, 5000)
  }

  render () {
    return (
      <div className='center'>
        <Image
          style={{ display: this.state.displayImg }}
          src='https://top250imdbfilms.files.wordpress.com/2013/11/fight-club-penis-at-the-end-cretits.jpg' size='massive'
        />
        <Message attached style={{ display: this.state.displayMessage }}>
          <Message.Header color='black'>404 Not Found!</Message.Header>
          <p>
            The pirates is close-mouthed. So we have <strong>3</strong> rules that should not be forgotten.
          </p>
          <Message.List>
            <Message.Item>You <strong>DO NOT</strong> talk about this page.</Message.Item>
            <Message.Item>You <strong>DO NOT</strong> talk about this page.</Message.Item>
            <Message.Item>You <strong>DO NOT</strong> talk about this page.</Message.Item>
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
