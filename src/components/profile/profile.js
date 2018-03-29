import React, { Component } from 'react'
import './profile.css';
import { Image, Card, Icon, Grid, Tab, Header } from 'semantic-ui-react'
import Browse from '../../components/browse/browse';

export default class Profile extends Component {


  render() {
    const panes = [
      { menuItem: 'Info', render: () =>
      <Tab.Pane>
        <Header as='h5'>E-mail:</Header><a className="link" href='mailto:jack@black.com'>jack@black.com</a>
        <Header as='h5'>Type:</Header> Pirate
        <Header as='h5'>Verified:</Header> Yes
        <Header as='h5'>Joined in:</Header> 22/03/2018 18:03
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
                <Image src='https://www.sideshowtoy.com/wp-content/uploads/2017/05/disney-pirates-of-the-caribbean-dead-men-tell-no-tales-jack-sparrow-sixth-scale-hot-toys-thumb-903044.jpg'/>
                <Card.Content>
                  <Card.Header>
                    Captain Jack
                  </Card.Header>
                  <Card.Description>
                    He is a captain
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
