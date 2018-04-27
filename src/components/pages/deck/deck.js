import React, { Component } from 'react'
import './deck.css';
import logo from '../../../assets/img/logo.gif';
import we_need_you from '../../../assets/img/weneedyou.png';
import { Icon, Grid, Image, Button, Form, Header, Message, List, Checkbox, Label, Item } from 'semantic-ui-react'
import { CreateToken, CreateUser, ForgotPass } from '../../../api/token';
import { ErrorAnalysis } from '../../../middleware/error-handler';
import Recaptcha from 'react-recaptcha';


export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinUsFormDisplay: "none",
      signInFormDisplay: "none",
      forgotPassFormDisplay: "none",
      formResultDisplay: "none",
      formResultType: 'green',
      formResultHeader: '',
      formResultDescription: '',
      joinUsFormTermsAgree: false,
      joinUsFormCaptcha: false,
      joinUsFormData: {
        username:'',
        email:'',
        password: '',
        birthday: ''
      },
      signInFormData: {
        usernameOrEmail: '',
        password: ''
      },
      forgotPassFormData: {
        email: ''
      }
    };
    this.joinUsFormHandleChange = this.joinUsFormHandleChange.bind(this);
    this.signInFormHandleChange = this.signInFormHandleChange.bind(this);
    this.forgotPassFormHandleChange = this.forgotPassFormHandleChange.bind(this);
    this.joinUs = this.joinUs.bind(this);
    this.signIn = this.signIn.bind(this);
    this.forgotPass = this.forgotPass.bind(this);
    this.termsAgreeChange = this.termsAgreeChange.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  termsAgreeChange(event, data){
    this.setState({joinUsFormTermsAgree: data.checked});
  }

  // verify user callback function
  verifyCallback(response) {
    this.setState({joinUsFormCaptcha: true});
  }

  joinUsFormHandleChange(event, data) {
    let mockJoinUsFormData = this.state.joinUsFormData;
    mockJoinUsFormData[data.name] = event.target.value;
    this.setState({joinUsFormData: mockJoinUsFormData});
  }

  signInFormHandleChange(event, data) {
    let mockSignInFormData = this.state.signInFormData;
    mockSignInFormData[data.name] = event.target.value;
    this.setState({signInFormData: mockSignInFormData});
  }

  forgotPassFormHandleChange(event, data) {
    let mockForgotPassFormData = this.state.forgotPassFormData;
    mockForgotPassFormData[data.name] = event.target.value;
    this.setState({signInFormData: mockForgotPassFormData});
  }

  joinUsClick = () => {
    this.setState({
      joinUsFormDisplay: "block",
      signInFormDisplay: "none",
      forgotPassFormDisplay: "none",
      formResultDisplay: "none",
    });
  }

  signInClick = () => {
    this.setState({
      signInFormDisplay: "block",
      joinUsFormDisplay: "none",
      forgotPassFormDisplay: "none",
      formResultDisplay: "none"
    });
  }

  forgotPassClick = () => {
    this.setState({
      forgotPassFormDisplay: "block",
      signInFormDisplay: "none",
      joinUsFormDisplay: "none",
      formResultDisplay: "none"
    });
  }

  joinUs = (event) => {
    CreateUser(this.state.joinUsFormData, [
      'id', 'username', 'email', 'birthday', 'created_at'
    ]).then(data => {
      this.setState({
        formResultDisplay: "block",
        formResultType: 'green',
        formResultHeader: 'Register Successfull',
        formResultDescription: 'Before login, go to your email and click the activation button.'
      });
    })
    .catch(err => {
      ErrorAnalysis(err, this.props.history);
      this.setState({
        formResultDisplay: "block",
        formResultType: 'red',
        formResultHeader: 'Register Failed',
        formResultDescription: err.response.errors[0].message
      });
    })
    event.preventDefault();
  }

  signIn = (event) => {
    CreateToken(this.state.signInFormData, [
      'token',
      {'user':['id', 'username', 'email', 'about',{'role': ['type']}, 'birthday',
      'created_at']},
    ]).then(tokenData => {
      localStorage.setItem('token', tokenData.createToken.token);
      localStorage.setItem('user', JSON.stringify(tokenData.createToken.user));
      localStorage.setItem('role', tokenData.createToken.user.role.type);
      this.props.history.push("/browse");
    })
    .catch(err => {
      this.setState({
        formResultDisplay: "block",
        formResultType: 'red',
        formResultHeader: 'Sign in Failed',
        formResultDescription: err.response.error
      });
    })
    event.preventDefault();
  }

  forgotPass = (event) => {
    ForgotPass(this.state.forgotPassFormData, []).then(data => {
      this.setState({
        formResultDisplay: "block",
        formResultType: 'green',
        formResultHeader: 'Email Sended',
        formResultDescription: 'Please check your email and change your password.'
      });
    })
    .catch(err => {
      this.setState({
        formResultDisplay: "block",
        formResultType: 'red',
        formResultHeader: 'Forgot Pass Failed',
        formResultDescription: err.response.error
      });
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className='center'>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={logo} />
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as='h1'>Ahoy Pirate,</Header>
              <div>
                Welcome to <strong>kafa.io</strong>. This is a <strong>private torrent site</strong>.
                You can <strong>download/upload</strong> and <strong>share</strong> the file you want.
                But you need to upload a lot of what you downloaded.
                At the same time the <strong>kafa.io</strong> is a BitTorrent client.
                So you are only considered to upload it on this site.<br />
                <List bulleted>
                  <List.Item>The ratio should not fall below <strong>0.5</strong>.</List.Item>
                  <List.Item>You should have <strong>min 1 GB</strong> download/upload every month.</List.Item>
                  <List.Item>You must do it <strong>on site</strong> for the counting of uploads size.</List.Item>
                </List>
              </div>
              <div className='deck-button-group'>
                <Button onClick={this.joinUsClick} icon labelPosition='left' color='black'>
                  <Icon name='group' />
                  Join us
                </Button>
                <Button onClick={this.signInClick} icon labelPosition='right' color='black'>
                  Sign in
                  <Icon name='sign in' />
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{display: this.state.joinUsFormDisplay }}>
            <Grid.Column width={16}>
              <Form onSubmit={this.joinUs}>
                <Form.Group widths='equal'>
                  <Form.Input fluid name="username" label='username' value={this.state.joinUsFormData.username} onChange={this.joinUsFormHandleChange} placeholder='captainjack' required />
                  <Form.Input fluid name='email' type='email' label='email' value={this.state.joinUsFormData.email} onChange={this.joinUsFormHandleChange} placeholder='jacksparrow@blackpearl.com' required />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid type='password' name='password' label='password' value={this.state.joinUsFormData.password} onChange={this.joinUsFormHandleChange} placeholder='min 8, have a number' required />
                  <Form.Input fluid type='password' label='password again' placeholder='********' required />
                </Form.Group>
                <Message>
                    <div>The reason we do want your birthday, verify your age is 18 or bigger.</div>
                    <Form.Input fluid name='birthday' label='birthday' value={this.state.joinUsFormData.birthday}  onChange={this.joinUsFormHandleChange} placeholder='YYYY-mm-dd exp:1993-03-22' required />
                </Message>
                <Form.Field required>
                  <Checkbox onChange={this.termsAgreeChange} label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Form.Field>
                  <Recaptcha
                    sitekey="6LcRq1QUAAAAAGsVoN2J52MW7C9dgkmhC1IY-Dxx"
                    verifyCallback={this.verifyCallback}
                  />
                </Form.Field>
                <Form.Button disabled={!this.state.joinUsFormTermsAgree || !this.state.joinUsFormCaptcha}>Register</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{display: this.state.signInFormDisplay }}>
            <Grid.Column width={16}>
              <Form onSubmit={this.signIn}>
                <Form.Group widths='equal'>
                  <Form.Input fluid name='usernameOrEmail' label='username or email' value={this.state.signInFormData.usernameOrEmail} onChange={this.signInFormHandleChange} placeholder='captainjack or jacksparrow@blackpearl.com' required />
                  <Form.Input fluid type='password' name='password' label='password' value={this.state.signInFormData.password} onChange={this.signInFormHandleChange} placeholder='********' required />
                </Form.Group>
                <Form.Group>
                  <Form.Button>Sign in</Form.Button>
                  <Button as='a' basic color='yellow' onClick={this.forgotPassClick}>Forgot password?</Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{display: this.state.forgotPassFormDisplay }}>
            <Grid.Column width={16}>
              <Form onSubmit={this.forgotPass}>
                <Form.Group widths='equal'>
                  <Form.Input fluid name='email' type='email' label='email' value={this.state.forgotPassFormData.email} onChange={this.forgotPassFormHandleChange} placeholder='jacksparrow@blackpearl.com' required />
                </Form.Group>
                <Form.Group>
                  <Form.Button>Send Password Change Email</Form.Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{display: this.state.formResultDisplay }}>
            <Grid.Column width={16}>
            <Message color={this.state.formResultType}>
              <Message.Header>{ this.state.formResultHeader }</Message.Header>
              <p>{ this.state.formResultDescription }</p>
            </Message>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='description-table'>
            <Grid.Column width={8}>
            <Item.Group>
              <Item>
                <Item.Content verticalAlign='middle'>
                  <Item.Header>
                    <Icon.Group>
                      <Icon name='file code outline' />
                      <Icon corner name='dont' />
                    </Icon.Group>
                    You do not need any program
                  </Item.Header>
                  <Item.Description>
                    kafa.io is a bittorrent client.
                    You can download/upload operations on this site.[coming soon]
                  </Item.Description>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign='middle'>
                  <Item.Header>
                    <Icon.Group>
                      <Icon name='puzzle' />
                      <Icon corner name='puzzle' />
                    </Icon.Group>
                    Modern Design
                  </Item.Header>
                  <Item.Description>
                    You hate stupid adsense and complex design like puzzle?
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
            </Grid.Column>
            <Grid.Column width={8}>
            <Item.Group>
              <Item>
                <Item.Content verticalAlign='middle'>
                  <Item.Header><Icon name='code'/>Your turn</Item.Header>
                  <Item.Description>
                    We have public api with running graphql. Use our api and build amazing things...
                  </Item.Description>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content verticalAlign='middle'>
                  <Item.Header>
                    <Icon name='plug'/>Take it easy
                  </Item.Header>
                  <Item.Description>
                    Populer applications will integrated our system.[coming soon]
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src={we_need_you}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h1' size='huge'>We Need You! Support Us...</Header>
              <div>
                Kafa.io is started hobby project.
                Our goal is to set up a platform to share files freely.
                But we have some expenses.
                We have to pay bills sended from&nbsp;
                <a href='https://digitalocean.com' className='link'>
                <Icon className="fab fa-digital-ocean"/>Digitalocean</a>&nbsp;and&nbsp;
                <a href='https://namecheap.com' className='link'>NameCheap</a>.&nbsp;
                If you join us, you will be a great support.
                But we ask you to donate if there is a lot of money ;) <br />
                <List>
                  <List.Item>
                    <List.Content>
                      <Label color='yellow'>
                        <Icon className="fab fa-bitcoin"/>
                        &nbsp;bitcoin
                        <Label.Detail>32mLAFhCJ8m75jsGtdwWK6B4ScKtKn6Avb</Label.Detail>
                      </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label color='grey'>
                        <Icon className="fab fa-ethereum"/>
                        &nbsp;ethereum
                        <Label.Detail>0x8172Dd888EcBC9eBAF7dB95dB4e4b1Dc601E4B81</Label.Detail>
                      </Label>
                    </List.Content>
                  </List.Item>
                </List><br />
                <Header as='h1' size='huge'>Contribute Our Repos on Github</Header>
                <List>
                  <List.Item>
                    <List.Content>
                      <Label color='black' as='a' href='https://github.com/cemkiy/kafa-react' target="_blank">
                        <Icon name="github"/>
                        &nbsp;front-end
                        <Label.Detail>github.com/cemkiy/kafa-react</Label.Detail>
                      </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                  <List.Content>
                    <Label color='black' as='a' href='https://github.com/cemkiy/kafa-node' target="_blank">
                      <Icon name="github"/>
                      &nbsp;back-end
                      <Label.Detail>github.com/cemkiy/kafa-node</Label.Detail>
                    </Label>
                  </List.Content>
                  </List.Item>
                </List>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
