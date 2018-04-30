import React, {Component} from 'react'
import queryString from 'query-string'
import './verify.css'
import logo from '../../../assets/img/logo.gif'
import {Grid, Image, Form, Header, Message} from 'semantic-ui-react'
import {VerifyUser, ForgotPassComplete} from '../../../api/token'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class Deck extends Component {
  constructor (props) {
    super(props)
    this.state = {
      parsedQueryParams : {},
      forgotPassCompleteFormDisplay: 'none',
      formResultDisplay: 'none',
      formResultType: 'green',
      formResultHeader: '',
      formResultDescription: '',
      forgotPassCompleteFormData: {
        forgot_password_token: '',
        password: ''
      }
    }
  }

  joinUsComplete = () => {
    VerifyUser(this.state.email_verification_key, []).then(data => {
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'green',
        formResultHeader: 'Account Verified',
        formResultDescription: 'Redirect...'
      })
      this.props.history.push('/')
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'red',
        formResultHeader: 'Account Verify Failed',
        formResultDescription: err.response.error
      })
    })
  }

  emailChangeComplete = () => {
    VerifyUser(this.state.email_verification_key, []).then(data => {
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'green',
        formResultHeader: 'Email Changed',
        formResultDescription: 'Redirect...'
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'red',
        formResultHeader: 'Email Change Failed',
        formResultDescription: err.response.error
      })
    })
  }

  forgotPassCompleteFormHandleChange = (event, data) => {
    let mockforgotPassCompleteFormData = this.state.forgotPassCompleteFormData
    mockforgotPassCompleteFormData[data.name] = event.target.value
    this.setState({emailChangeCompleteFormData: mockforgotPassCompleteFormData})
  }

  forgotPassComplete (event) {
    ForgotPassComplete(this.state.forgot_password_token, this.state.forgotPassCompleteFormData, []).then(data => {
      this.setState({formResultDisplay: 'block', formResultType: 'green', formResultHeader: 'Password Changed', formResultDescription: 'Redirect...'})
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({formResultDisplay: 'block', formResultType: 'red', formResultHeader: 'Forgot Pass Failed', formResultDescription: err.response.error})
    })
    event.preventDefault()
  }

  componentDidMount () {
    this.setState({parsedQueryParams: queryString.parse(this.props.location.search)},function(){
      if(this.state.parsedQueryParams.type === 'joinUsComplete'){
        this.joinUsComplete()
      }else if(this.state.parsedQueryParams.type === 'emailChangeComplete'){
        this.emailChangeComplete()
      }else if(this.state.parsedQueryParams.type === 'forgotPassComplete'){
        this.setState({
          forgotPassCompleteFormDisplay: 'block',
          formResultDisplay: 'none'
        })
      }
    })
  }

  render () {
    return (<div className='center'>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={logo} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as='h1'>Ahoy Pirate,</Header>
            <div>
              Welcome to
              &nbsp;<strong>kafa.io</strong>&nbsp; 
              verify page. Check the url and do not be a shark bait.<br />
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{display: this.state.forgotPassCompleteFormDisplay}}>
          <Grid.Column width={16}>
            <Form onSubmit={this.forgotPassComplete}>
              <Form.Group widths='equal'>
                <Form.Input fluid type='password' name='password' label='password'
                  value={this.state.forgotPassCompleteFormData.password} onChange={this.forgotPassFormHandleChange}
                  placeholder='min 8, have a number' required />
              </Form.Group>
              <Form.Group>
                <Form.Button>Change Password</Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{display: this.state.formResultDisplay}}>
          <Grid.Column width={16}>
            <Message color={this.state.formResultType}>
              <Message.Header>{this.state.formResultHeader}</Message.Header>
              <p>{this.state.formResultDescription}</p>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>)
  }
}
