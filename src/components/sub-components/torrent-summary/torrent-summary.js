import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image, Popup, Container, Reveal } from 'semantic-ui-react'

export default class TorrentSummary extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  formatDate = (dateString) => {
    const date = new Date(this.props.torrent.created_at)
    return date.toLocaleDateString()
  }

  render () {
    return (
      <Popup
        flowing='true' trigger={<Link className='link'> {this.props.torrent.name}</Link>}
        hoverable
      >

        <Reveal animated='move right'>
          <Reveal.Content visible>
            <Image size='medium' src={this.props.torrent.screens[0]} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Container textAlign='left'><strong>{this.props.torrent.name}</strong></Container>
            <Container textAlign='left'>{this.formatDate(this.props.torrent.created_at)}</Container>
            <Container textAlign='left'>{this.props.torrent.description}</Container>
          </Reveal.Content>
        </Reveal>
      </Popup>
    )
  }
}
