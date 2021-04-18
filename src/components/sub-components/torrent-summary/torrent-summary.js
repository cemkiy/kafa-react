import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Button, Image, Popup, Card } from 'semantic-ui-react'

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
        className='popup-wide' trigger={<Link to={'/' + this.props.torrent.id + '/detail'} className='link'> {this.props.torrent.name}</Link>}
        hoverable
      >
        <Card>
          <Image src={this.props.torrent.screens[0]} />
          <Card.Content>
            <Card.Header>{this.props.torrent.name}</Card.Header>
            <Card.Meta>{this.formatDate(this.props.torrent.created_at)}</Card.Meta>
            <Card.Description>{this.props.torrent.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to='/detail'>
              <Button icon fluid labelPosition='right' color='yellow'>
                Detail
                <Icon name='right arrow' />
              </Button>
            </Link>
          </Card.Content>
        </Card>
      </Popup>
    )
  }
}
