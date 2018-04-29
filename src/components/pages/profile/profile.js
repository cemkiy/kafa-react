import React, {Component} from 'react'
import './profile.css'
import {Card, Grid, Tab, Header} from 'semantic-ui-react'
import {UserById} from '../../../api/user'
import Browse from '../../../components/pages/browse/browse'
import UserCard from '../../../components/sub-components/user-card/user-card'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentWillMount () {
    UserById({
      id: this.props.match.params.userId
    }, [
      'id',
      'username',
      'email',
      'about', {
        'role': ['type']
      },
      'birthday',
      'created_at'
    ]).then(data => {
      this.setState({user: data.userById})
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
    })
  }

  getFormatDate (dateString) {
    var date = new Date(dateString)
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
  }

  render () {
    const panes = [
      {
        menuItem: 'Info',
        render: () => <Tab.Pane>
          <Header as='h5'>E-mail:</Header>
          <a className='link' href={'mailto:' + this.state.user.email}>
            {this.state.user.email}
          </a>
          <Header as='h5'>Type:</Header>
          {
            this.state.user.role
              ? this.state.user.role.type
              : ''
          }
          <Header as='h5'>Joined in:</Header>
          {this.getFormatDate(this.state.user.created_at)}
        </Tab.Pane>
      }, {
        menuItem: 'Torrents',
        render: () => <Tab.Pane>
          <Browse />
        </Tab.Pane>
      }
    ]

    return (<div className='profile'>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <UserCard user={this.state.user} className='profile-info' />
          </Grid.Column>
          <Grid.Column width={13}>
            <Card className='profile-log'>
              <Card.Content>
                <Tab panes={panes} />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>)
  }
}
