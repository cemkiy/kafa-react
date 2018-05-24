import React, {Component} from 'react'
import './movie.css'
import {
  Header,
  Message,
  Icon,
  Card,
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
      user: {},
      show_info: 'none',
      show_cast: 'none',
      show_additional: 'none',
      movie: {
        title: 'The Toxic Avenger',
        _year_data: '1984',
        rated: 'R',
        released: '1986-04-11T08:00:00.000Z',
        runtime: '82 min',
        genres: 'Action, Comedy, Horror',
        director: 'Michael Herz, Lloyd Kaufman',
        writer: 'Lloyd Kaufman (story), Joe Ritter (screenplay), Lloyd Kaufman (additional material), Gay Partington Terry (additional material), Stuart Strutin (additional material)',
        actors: 'Andree Maranda, Mitch Cohen, Jennifer Babtist, Cindy Manion',
        plot: 'This is the story of Melvin, the Tromaville Health Club mop boy, who inadvertently and naively trusts the hedonistic, contemptuous and vain health club members, to the point of accidentally ending up in a vat of toxic waste. The devastating results then have a transmogrification effect, his alter ego is released, and the Toxic Avenger is born, to deadly and comical results. The local mop boy is now the local Superhero, the saviour of corruption, thuggish bullies and indifference. Troma classic with good make-up effects and stunts, a pleasant surprise indeed.',
        languages: 'English',
        country: 'USA',
        awards: '1 nomination.',
        poster: 'http://ia.media-imdb.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        metascore: 'N/A',
        rating: '6.2',
        votes: '19,306',
        imdbid: 'tt0090190',
        type: 'movie',
        response: 'True',
        series: false,
        imdburl: 'https://www.imdb.com/title/tt0090190'
      }
    }
  }

  infoMouseEnter = () => {
    this.setState({show_info: 'block'})
  }

  infoMouseLeave = () => {
    this.setState({show_info: 'none'})
  }

  castMouseEnter = () => {
    this.setState({show_cast: 'block'})
  }

  castMouseLeave = () => {
    this.setState({show_cast: 'none'})
  }

  additionalMouseEnter = () => {
    this.setState({show_additional: 'block'})
  }

  additionalMouseLeave = () => {
    this.setState({show_additional: 'none'})
  }

  // componentDidMount () {
  //   // imdb.get('Guardians of the Galaxy Vol. 2', { apiKey: '70a3c521', timeout: 30000 })
  //   //   .then((data) => {
  //   //     console.log(data)
  //   //     this.setState({movie: data})
  //   //   })
  //   //   .catch(console.log)
  // }

  render () {
    return (<div className='detail-section'>
      <Header as='h2'>Torrent Details</Header>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={8}>
            <Card className='imdb-card'>
              <Card.Content className='imdb-card-content'>
                <Message icon className='imdb-header'>
                  <Icon name='imdb' />
                  <Message.Content>
                    <Message.Header>Thor Ragnorok<div className='imdb-rate'><Label size='huge' color='black'><span className='imdb-point'>7.5</span></Label></div></Message.Header>
                    <Icon name='film' /> Movies - <Icon name='calendar outline' /> 2017-03-12  - <Icon name='clock' /> 82 min
                  </Message.Content>
                </Message>
              </Card.Content>
              <Card.Content className='imdb-poster' style={{backgroundImage: "url('https://cdn1.ntv.com.tr/gorsel/sanat/thor-ragnarok-serinin-rekorunu-kirdi-abd-box-office/,QmYDjfqgSkeoATwFY6DK4g.jpg')"}}>
                <Card
                  style={{display: this.state.show_info}}
                  centered
                  fluid
                  className='imdb-info'
                  header='Info'
                  meta={<div><Label color='yellow'>Action</Label><Label color='yellow'>Adventure</Label><Label color='yellow'>Sci-fi</Label></div>}
                  description={this.state.movie.plot}
                />
                <Card
                  style={{display: this.state.show_cast}}
                  centered
                  fluid
                  className='imdb-info'
                  header='Cast'
                  meta={
                    <div>
                      <Label.Group>
                        {
                          this.state.movie.director.split(',').map(el => <Label color='grey' key={el}>{el}<Label.Detail>director</Label.Detail></Label>)
                        }
                      </Label.Group><br />
                      <Label.Group>
                        {
                          this.state.movie.writer.split(',').map(el => <Label color='black' key={el}>{el}<Label.Detail>writer</Label.Detail></Label>)
                        }
                      </Label.Group><br />
                      <Label.Group>
                        {
                          this.state.movie.actors.split(',').map(el => <Label color='yellow' key={el}>{el}<Label.Detail>actor</Label.Detail></Label>)
                        }
                      </Label.Group>
                    </div>}
                />
                <Card
                  style={{display: this.state.show_additional}}
                  centered
                  fluid
                  className='imdb-info'
                  header='Additional'
                  meta={
                    <div>
                      <Label.Group>
                        <Label color='grey'><Icon name='comment' />{this.state.movie.languages}<Label.Detail>languages</Label.Detail></Label><br />
                        <Label color='black'><Icon name='world' />{this.state.movie.country}<Label.Detail>country</Label.Detail></Label><br />
                        <Label color='yellow'><Icon name='trophy' />{this.state.movie.awards}<Label.Detail>awards</Label.Detail></Label>
                      </Label.Group>
                    </div>}
                />
              </Card.Content>
              <Card.Content className='imdb-card-content'>
                <Button.Group className='imdb-card-button-group' widths='8'>
                  <Button className='action-button' size='massive' color='black'
                    onMouseEnter={this.infoMouseEnter} onMouseLeave={this.infoMouseLeave}>
                     Info
                  </Button>
                  <Button className='action-button' size='massive' color='black'
                    onMouseEnter={this.castMouseEnter} onMouseLeave={this.castMouseLeave}>
                     Cast
                  </Button>
                  <Button className='action-button' size='massive' color='black'
                    onMouseEnter={this.additionalMouseEnter} onMouseLeave={this.additionalMouseLeave}>
                     Additional
                  </Button>
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
