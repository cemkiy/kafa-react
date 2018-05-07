import React, {Component} from 'react'
import './detail.css'
import {
  Header,
  Message,
  Icon,
  Card,
  Popup,
  Image,
  Grid,
  Button,
  List
} from 'semantic-ui-react'
import UserLabel from '../../../components/sub-components/user-label/user-label'
import CommentSection from '../../../components/sub-components/comment-section/comment-section'
import Movie from '../../../components/sub-components/movie/movie'

export default class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        id: '321asd'
      }
    }
  }

  render () {
    return (<div id='content' className='detail-section'>
      <Movie />
      <Header as='h2'>Torrent Details</Header>
      <div>
        <Message icon color='black'>
          <Icon name='paw' />
          <Message.Content>
            <Message.Header>Battlefield X</Message.Header>
            This is a action game.
          </Message.Content>
        </Message>
      </div>
      <div className='detail-card-div'>
        <Card centered className='detail-card'>
          <Card.Content>
            <Card.Description>
              <Grid divided='vertically'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as='h5'>Uploader:</Header>
                    <UserLabel user={this.state.user} />
                    <Header as='h5'>Size:</Header>
                    14 GB
                    <Header as='h5'>Leechs:</Header>
                    80
                    <Header as='h5'>Seeds:</Header>
                    160
                    <Header as='h5'>Created At:</Header>
                    22/03/2018 18:03
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h5'>Audios:</Header>
                    En, Fr, Ge
                    <Header as='h5'>Subtitles:</Header>
                    Tr
                    <Header as='h5'>Kafa:</Header>
                    458
                    <Header as='h5'>Tag:</Header>
                    Game/Action
                    <Header as='h5'>Updated At:</Header>
                    22/03/2018 18:03
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
      <div className='detail-buttons'>
        <Button icon labelPosition='left' color='yellow'>
          <Icon name='save' />
          Torrent File
        </Button>
        <Button icon labelPosition='right' color='yellow'>
          Magnet Link
          <Icon name='magnet' />
        </Button>
      </div>
      <div className='detail-card-div'>
        <Card centered className='detail-card'>
          <Card.Content>
            <Card.Description>
              <Grid divided='vertically'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <List>
                      <List.Item icon='image' content={<Popup
                        trigger={
                          <a className='link' href='http://www.semantic-ui.com'>semantic-ui.com</a>
                        }
                        flowing
                        hoverable > <Image floated='right' size='medium' src='https://static-dergi.milliyetemlak.com/dergi/wp-content/uploads/2017/10/orman-emvali-1.jpg' />
                      </Popup>} />
                      <List.Item icon='image' content={<Popup
                        trigger={
                          <a className='link' href='http://www.semantic-ui.com'>semantic-ui.com</a>
                        }
                        flowing
                        hoverable > <Image floated='right' size='medium' src='https://static-dergi.milliyetemlak.com/dergi/wp-content/uploads/2017/10/orman-emvali-1.jpg' />
                      </Popup>} />
                      <List.Item icon='image' content={<Popup
                        trigger={
                          <a className='link' href='http://www.semantic-ui.com'>semantic-ui.com</a>
                        }
                        flowing
                        hoverable > <Image floated='right' size='medium' src='https://static-dergi.milliyetemlak.com/dergi/wp-content/uploads/2017/10/orman-emvali-1.jpg' />
                      </Popup>} />
                    </List>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h5'>Info Link:</Header>
                    <a href='http://steam.com/Battlefield'>Steam</a>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
      <div className='detail-card-div'>
        <CommentSection />
      </div>
    </div>)
  }
}
