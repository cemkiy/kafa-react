import React, { Component } from 'react'
import './detail.css';
import { Header, Message, Icon, Label, Card, Popup, Image, Grid, Button } from 'semantic-ui-react'

export default class Detail extends Component {


  render() {


    return (
      <div className="detail-section">
        <Header as='h2'>Torrent Details</Header>
        <div>
          <Message icon color="black" className="torrent-description">
            <Icon name='paw notched' />
            <Message.Content>
              <Message.Header>Battlefield X</Message.Header>
              This is a action game.
            </Message.Content>
          </Message>
        </div>
        <div className="detail-card-div" >
          <Card centered="true" className="detail-card">
            <Card.Content>
              <Card.Description>
                <Grid divided='vertically'>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Header as='h5'>Size:</Header> 14 GB
                      <Header as='h5'>Leechs:</Header> 80
                      <Header as='h5'>Seeds:</Header> 160
                      <Header as='h5'>Tag:</Header> Game/Action
                      <Header as='h5'>Created At:</Header> 22/03/2018 18:03
                    </Grid.Column>
                    <Grid.Column>
                      <Header as='h5'>Audios:</Header> En, Fr, Ge
                      <Header as='h5'>Subtitles:</Header> Tr
                      <Header as='h5'>Kafa:</Header> 458
                      <Header as='h5'>Info Link:</Header> IMDB
                      <Header as='h5'>Updated At:</Header> 22/03/2018 18:03
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div className="detail-buttons">
          <Button icon labelPosition='left' color="yellow">
            <Icon name='save' />
            Torrent File
          </Button>
          <Button icon labelPosition='right' color="yellow">
            Magnet Link
            <Icon name='magnet' />
          </Button>
        </div>
      </div>
    )
  }
}
