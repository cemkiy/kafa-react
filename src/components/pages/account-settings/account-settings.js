import React, {Component} from 'react'
import './account-settings.css'
import {Card, Form, Message} from 'semantic-ui-react'
import {ChangePassUser, UpdateEmailUser, UpdateUser} from '../../../api/user'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: JSON.parse(window.localStorage.getItem('user')),
      formResultDisplay: 'none',
      formResultType: 'green',
      formResultHeader: '',
      formResultDescription: '',
      emailChangeFormData: {
        email: ''
      },
      passwordChangeFormData: {
        password: '',
        password_again: ''
      },
      profileChangeFormData: {
        about: ''
      }
    }
  }

  emailChangeFormHandleChange = (event, data) => {
    let mockEmailChangeFormData = this.state.emailChangeFormData
    mockEmailChangeFormData[data.name] = event.target.value
    this.setState({emailChangeFormData: mockEmailChangeFormData})
  }

  passwordChangeFormHandleChange = (event, data) => {
    let mockPasswordChangeFormData = this.state.passwordChangeFormData
    mockPasswordChangeFormData[data.name] = event.target.value
    this.setState({passwordChangeFormData: mockPasswordChangeFormData})
  }

  profileChangeFormHandleChange = (event, data) => {
    let mockProfileChangeFormData = this.state.profileChangeFormData
    mockProfileChangeFormData[data.name] = event.target.value
    this.setState({profileChangeFormData: mockProfileChangeFormData})
  }

  emailChange = (event) => {
    UpdateEmailUser(this.state.user.id, this.state.emailChangeFormData, [
      'id',
      'username',
      'email',
      'verified',
      'about', {
        'role': ['type']
      },
      'birthday',
      'created_at'
    ]).then(data => {
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'yellow',
        formResultHeader: 'Update Email Processing',
        formResultDescription: 'Go to your email and click the activation button.'
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'red',
        formResultHeader: 'Update Email Failed',
        formResultDescription: err.response.errors[0].message
      })
    })
    event.preventDefault()
  }

  passwordChange = (event) => {
    ChangePassUser(this.state.user.id, this.state.passwordChangeFormData, [
      'id',
      'username',
      'email',
      'verified',
      'about', {
        'role': ['type']
      },
      'birthday',
      'created_at'
    ]).then(data => {
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'green',
        formResultHeader: 'Updated Password',
        formResultDescription: 'Now, activated new password.'
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'red',
        formResultHeader: 'Update Password Failed',
        formResultDescription: err.response.errors[0].message
      })
    })
    event.preventDefault()
  }

  profileChange = (event) => {
    UpdateUser(this.state.user.id, this.state.profileChangeFormData, [
      'id',
      'username',
      'email',
      'verified',
      'about', {
        'role': ['type']
      },
      'birthday',
      'created_at'
    ]).then(data => {
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'green',
        formResultHeader: 'Updated Password',
        formResultDescription: 'Now, activated new password.'
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        formResultDisplay: 'block',
        formResultType: 'red',
        formResultHeader: 'Update Password Failed',
        formResultDescription: err.response.errors[0].message
      })
    })
    event.preventDefault()
  }

  render () {
    return (<Card className='form-card' centered>
      <Card.Content>
        <Card.Header content='Account Settings' />
        <Message>
          <Message.Header>
            Email Change Notify
          </Message.Header>
          <p>
            You need to confirm the link from the email to complete this process. If you are not complete, your account is disabled.
          </p>
        </Message>
        <Form className='form' onSubmit={this.emailChange}>
          <Form.Input fluid name='email' label='email' value={this.state.emailChangeFormData.email}
            onChange={this.emailChangeFormHandleChange} placeholder='jacksparrow@mail.com' required='required' />
          <Form.Button>Submit</Form.Button>
        </Form>
        <hr />
        <Message>
          <Message.Header>
            Password Change Notify
          </Message.Header>
          <p>
            You need to confirm the link from the email to complete this process.
          </p>
          <Message.List items={['Password must be at least 8 characters', 'Password must contain at least 1 digit']} />
        </Message>
        <Form className='form' onSubmit={this.passwordChange}>
          <Form.Input fluid type='password' name='password' label='password'
            value={this.state.passwordChangeFormData.password} onChange={this.passwordChangeFormHandleChange}
            placeholder='min 8, have a number' required='required' />
          <Form.Input fluid type='password' name='password_again' label='password_again'
            value={this.state.passwordChangeFormData.password_again} onChange={this.passwordChangeFormHandleChange}
            placeholder='min 8, have a number' required='required' />
          <Form.Button>Submit</Form.Button>
        </Form>
        <hr />
        <Form className='form' onSubmit={this.profileChange}>
          <Form.TextArea label='about yourself' name='about' value={this.state.profileChangeFormData.about}
            onChange={this.profileChangeFormHandleChange} placeholder='You should write short. Sorry, but nobody reads.'
            required='required' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Card.Content>
    </Card>)
  }
}
