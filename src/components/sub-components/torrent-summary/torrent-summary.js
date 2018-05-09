import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon, Button, Image, Popup, Card} from 'semantic-ui-react'

export default class TorrentSummary extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<Popup className='popup-wide' trigger={<Link to='/detail' className='link'> Battlefield x</Link>}
      hoverable>
      <Card>
        <Image src='https://cdn.ndtv.com/tech/gadgets/bf4_ea_dice.jpg?output-quality=80' />
        <Card.Content>
          <Card.Header>Battlefield x</Card.Header>
          <Card.Meta>2018-06-02</Card.Meta>
          <Card.Description>This is a action game.</Card.Description>
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
    </Popup>)
  }
}
