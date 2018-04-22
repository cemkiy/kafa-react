import React, { Component } from 'react'
import './profile.css';
import { Card, Icon, Grid, Tab, Header } from 'semantic-ui-react'
import Browse from '../../components/browse/browse';
import Gravatar from 'react-gravatar'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
      role: localStorage.getItem('role')
    }
  }

  getFormatDate(dateString){
    var date = new Date(dateString);
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  }

  render() {
    const panes = [
      { menuItem: 'Info', render: () =>
      <Tab.Pane>
        <Header as='h5'>E-mail:</Header>
          <a className="link" href={'mailto:' + this.state.user.email}>
            {this.state.user.email}
          </a>
        <Header as='h5'>Type:</Header> {this.state.role}
        <Header as='h5'>Joined in:</Header> {this.getFormatDate(this.state.user.created_at)}
      </Tab.Pane> },
      { menuItem: 'Torrents', render: () =>
      <Tab.Pane>
        <Browse />
      </Tab.Pane> }
    ]

    return (
      <div className="profile">
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <Card className="profile-info">
                <Gravatar email={this.state.user.email} size={285}/>
                <Card.Content>
                  <Card.Header>
                    {this.state.user.username}
                  </Card.Header>
                  <Card.Description>
                    {this.state.user.about || 'nothing to show'}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='magnet' />
                    22 Torrents
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={13}>
              <Card className="profile-log">
                <Card.Content>
                  <Tab panes={panes} />
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
