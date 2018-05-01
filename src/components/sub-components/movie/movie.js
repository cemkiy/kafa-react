import React, {Component} from 'react'
import './detail.css'
import {
  Header,
  Message,
  Icon,
  Card,
  Popup,
  Grid,
  Button,
  Label
} from 'semantic-ui-react'
import UserLabel from '../../../components/sub-components/user-label/user-label'
// const imdb = require('imdb-api')

export default class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movie: {
        'Title': 'Guardians of the Galaxy Vol. 2',
        'Year': '2017',
        'Rated': 'PG-13',
        'Released': '05 May 2017',
        'Runtime': '136 min',
        'Genre': 'Action, Adventure, Sci-Fi',
        'Director': 'James Gunn',
        'Language': 'English',
        'Country': 'USA',
        'Awards': 'Nominated for 1 Oscar. Another 12 wins & 42 nominations.',
        'Poster': 'https://ia.media-imdb.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg',
        'Ratings': [{'Source': 'Internet Movie Database', 'Value': '7.7/10'}, {'Source': 'Rotten Tomatoes', 'Value': '83%'},
          {'Source': 'Metacritic', 'Value': '67/100'}],
        'Metascore': '67',
        'imdbRating': '7.7',
        'imdbVotes': '362,736',
        'imdbID': 'tt3896198',
        'Type': 'movie',
        'DVD': '22 Aug 2017',
        'BoxOffice': '$389,804,217',
        'Production': 'Walt Disney Pictures',
        'Website': 'https://marvel.com/guardians',
        'Response': 'True'
      }
    }
  }

  componentDidMount () {
    // imdb.get('Guardians of the Galaxy Vol. 2', { apiKey: '70a3c521', timeout: 30000 })
    //   .then((data) => {
    //     console.log(data)
    //     this.setState({movie: data})
    //   })
    //   .catch(console.log)
  }

  render () {
    let css = {
      'background-image': "url('https://ia.media-imdb.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg')",
      width: '100%',
      height: '100%',
      'background-repeat': 'no repeat!important'
    }
    return (<div className='detail-section'>
      <Header as='h2'>Torrent Details</Header>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={8}>
            <Card className='imdb-card'>
              <Card.Content className='imdb-card-content'>
                <Message icon='icon' className='imdb-header'>
                  <Icon name='imdb' />
                  <Message.Content>
                    <Message.Header>Thor Ragnorok<div className='imdb-rate'><Label size='huge' color='black'>7.5</Label></div></Message.Header>
                    <Icon name='film' /> Movies - <Icon name='calendar outline' /> 2017-03-12
                  </Message.Content>
                </Message>
              </Card.Content>
              <Card.Content style={css}>
                <Card.Header>
                  Matthew
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    Joined in 2015
                  </span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content className='imdb-card-content'>
                <Button.Group className='imdb-card-button-group' widths='8'>
                  <Popup className='popup-wide' basic trigger={
                    <Button className='action-button' size='massive' color='black'>
                       Rate
                    </Button>
                  } flowing='flowing' hoverable='hoverable'>
                    56
                  </Popup>
                  <Popup className='popup-wide' basic trigger={
                    <Button className='action-button' size='massive' color='black'>
                       Rate
                    </Button>
                  } flowing='flowing' hoverable='hoverable'>
                    56
                  </Popup>
                  <Popup className='popup-wide' basic trigger={
                    <Button className='action-button' size='massive' color='black'>
                       Info
                    </Button>
                  } flowing='flowing' hoverable='hoverable'>
                    56
                  </Popup>
                  <Popup className='popup-wide' basic trigger={
                    <Button className='action-button' size='massive' color='black'>
                       Cast
                    </Button>
                  } flowing='flowing' hoverable='hoverable'>
                    56
                  </Popup>
                  <Popup className='popup-wide' basic trigger={
                    <Button className='action-button' size='massive' color='black'>
                       Rel
                    </Button>
                  } flowing='flowing' hoverable='hoverable'>
                    56
                  </Popup>
                </Button.Group>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>)
  }
}
