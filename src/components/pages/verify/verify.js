import React, {Component} from 'react'
import './verify.css';
import logo from '../../../assets/img/logo.gif';
import {Grid, Image, Form, Header, Message} from 'semantic-ui-react'
import {VerifyUser, ForgotPassComplete} from '../../../api/token';
import {ErrorAnalysis} from '../../../middleware/error-handler';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forgotPassCompleteFormDisplay: "none",
      formResultDisplay: "none",
      formResultType: 'green',
      formResultHeader: '',
      formResultDescription: '',
      forgotPassCompleteFormData: {
        forgot_password_token: '',
        password: ''
      }
    };
    this.joinUsComplete = this.joinUsComplete.bind(this);
    this.emailChangeComplete = this.emailChangeComplete.bind(this);
    this.forgotPassCompleteFormHandleChange = this.forgotPassCompleteFormHandleChange.bind(this);
    this.forgotPassComplete = this.emailChangeComplete.bind(this);
  }

  joinUsComplete() {
    VerifyUser(this.props.location.query.email_verification_key, []).then(data => {
      this.setState({formResultDisplay: "block", formResultType: 'green', formResultHeader: 'Account Verified', formResultDescription: 'Redirect...'});
      this.props.history.push("/");
    }).catch(err => {
      ErrorAnalysis(err, this.props.history);
      this.setState({formResultDisplay: "block", formResultType: 'red', formResultHeader: 'Account Verify Failed', formResultDescription: err.response.error});
    })
  }

  emailChangeComplete() {
    VerifyUser(this.props.location.query.email_verification_key, []).then(data => {
      this.setState({formResultDisplay: "block", formResultType: 'green', formResultHeader: 'Email Changed', formResultDescription: 'Redirect...'});
    }).catch(err => {
      ErrorAnalysis(err, this.props.history);
      this.setState({formResultDisplay: "block", formResultType: 'red', formResultHeader: 'Email Change Failed', formResultDescription: err.response.error});
    })
  }

  forgotPassCompleteFormHandleChange(event, data) {
    let mockforgotPassCompleteFormData = this.state.forgotPassCompleteFormData;
    mockforgotPassCompleteFormData[data.name] = event.target.value;
    this.setState({emailChangeCompleteFormData: mockforgotPassCompleteFormData});
  }

  forgotPassComplete = (event) => {
    ForgotPassComplete(this.props.location.query.forgot_password_token, this.state.forgotPassCompleteFormData, []).then(data => {
      this.setState({formResultDisplay: "block", formResultType: 'green', formResultHeader: 'Password Changed', formResultDescription: 'Redirect...'});
    }).catch(err => {
      ErrorAnalysis(err, this.props.history);
      this.setState({formResultDisplay: "block", formResultType: 'red', formResultHeader: 'Forgot Pass Failed', formResultDescription: err.response.error});
    });
    event.preventDefault();
  }

  componentDidMount() {
    console.log(this.props.location.search);
    // TODO: qs lib
    // if(this.props.location.query.type === 'joinUsComplete'){
    //   this.joinUsComplete();
    // }else if(this.props.location.query.type === 'emailChangeComplete'){
    //   this.emailChangeComplete();
    // }else if(this.props.location.query.type === 'forgotPassComplete'){
    //   this.setState({
    //     forgotPassCompleteFormDisplay: "block",
    //     formResultDisplay: "none"
    //   });
    // }
  }

  render() {
    return (<div className='center'>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={logo}/>
          </Grid.Column>
          <Grid.Column width={13}>
            <Header as='h1'>Ahoy Pirate,</Header>
            <div>
              Welcome to
              <strong>kafa.io</strong>
              verify page. Check the url and do not be a shark bait.<br/>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{
            display: this.state.forgotPassCompleteFormDisplay
          }}>
          <Grid.Column width={16}>
            <Form onSubmit={this.forgotPassComplete}>
              <Form.Group widths='equal'>
                <Form.Input fluid="fluid" type='password' name='password' label='password' value={this.state.forgotPassCompleteFormData.password} onChange={this.forgotPassFormHandleChange} placeholder='min 8, have a number' required="required"/>
              </Form.Group>
              <Form.Group>
                <Form.Button>Change Password</Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{
            display: this.state.formResultDisplay
          }}>
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
