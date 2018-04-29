import React, {Component} from 'react'
import {Card, Icon} from 'semantic-ui-react'
import Gravatar from 'react-gravatar'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getFormatDate(dateString) {
    var date = new Date(dateString);
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  }

  render() {
    return (<Card className="profile-info">
      <Gravatar email={this.props.user.email} size={285}/>
      <Card.Content>
        <Card.Header>
          {this.props.user.username}
        </Card.Header>
        <Card.Description>
          {this.props.user.about || 'nothing to show'}
        </Card.Description>
      </Card.Content>
      <Card.Content extra="extra">
        <a>
          <Icon name='magnet'/>
          22 Torrents
        </a>
      </Card.Content>
    </Card>)
  }
}
