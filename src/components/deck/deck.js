import React, { Component } from 'react'
import './deck.css';
import logo from '../../logo.png';
import we_need_you from '../../assets/img/weneedyou.png';
import { Icon, Grid, Image, Button, Form, Header, Message, List } from 'semantic-ui-react'

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinUsFormDisplay: "none",
      signInFormDisplay: "none",
      joinUsFormData: {
        username:'',
        email:'',
        password: '',
        birthday: ''
      },
      signInFormData: {
        usernameOrEmail:'',
        password:''
      }
    };
    this.joinUsFormHandleChange = this.joinUsFormHandleChange.bind(this);
    this.signInFormHandleChange = this.signInFormHandleChange.bind(this);
    this.joinUs = this.joinUs.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  joinUsFormHandleChange(event, data) {
    this.state.joinUsFormData[data.name] = event.target.value;
    this.setState({joinUsFormData:this.state.joinUsFormData});
  }

  signInFormHandleChange(event, data) {
    this.state.signInFormData[data.name] = event.target.value;
    this.setState({signInFormData:this.state.signInFormData});
  }

  joinUsClick = () => {
    this.setState({joinUsFormDisplay: "block"});
    this.setState({signInFormDisplay: "none"});
  }

  signInClick = () => {
    this.setState({signInFormDisplay: "block"});
    this.setState({joinUsFormDisplay: "none"});
  }

  joinUs = (event) => {
    console.log(this.state.joinUsFormData);
    event.preventDefault();
  }

  signIn = (event) => {
    console.log(this.state.signInFormData);
    event.preventDefault();
    this.props.history.push("/browse");
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
                  <Form.Input fluid name="username" label='username' value={this.state.joinUsFormData.username} onChange={this.joinUsFormHandleChange} placeholder='captainjack' />
                  <Form.Input fluid name='email' label='email' value={this.state.joinUsFormData.email} onChange={this.joinUsFormHandleChange} placeholder='jacksparrow@blackpearl.com' />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid name='password' label='password' value={this.state.joinUsFormData.password} onChange={this.joinUsFormHandleChange} placeholder='min 8, have a number' />
                  <Form.Input fluid label='password again' placeholder='********' />
                </Form.Group>
                <Message>
                    <div>The reason we do want your birthday, verify your age is 18 or bigger.</div>
                    <Form.Input fluid name='birthday' label='birthday' value={this.state.joinUsFormData.birthday}  onChange={this.joinUsFormHandleChange} placeholder='dd/mm/YYYY exp:22/03/1993' />
                </Message>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Form.Button>Register</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{display: this.state.signInFormDisplay }}>
            <Grid.Column width={16}>
              <Form onSubmit={this.signIn}>
                <Form.Group widths='equal'>
                  <Form.Input fluid name='usernameOrEmail' label='username or email' value={this.state.signInFormData.usernameOrEmail} onChange={this.signInFormHandleChange} placeholder='captainjack or jacksparrow@blackpearl.com' />
                  <Form.Input fluid name='password' label='password' value={this.state.signInFormData.password} onChange={this.signInFormHandleChange} placeholder='********' />
                </Form.Group>
                <Form.Button>Sign in</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='description-table'>
            <Grid.Column width={2}>
              <Icon.Group size='big'>
                <Icon name='file code outline' />
                <Icon corner name='dont' />
              </Icon.Group>
            </Grid.Column>
            <Grid.Column width={6} className='description-table-element'>
              <div>
                <Header as='h3'>You do not need any program</Header>
                kafa.io is a bittorrent client.
                You can download/upload operations on this site.
              </div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon.Group size='big'>
                <Icon name='puzzle' />
                <Icon corner name='puzzle' />
              </Icon.Group>
            </Grid.Column>
            <Grid.Column width={6} className='description-table-element'>
              <div>
                <Header as='h3'>Usable Design</Header>
                You hate stupid adsense and complex design like puzzle?
              </div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon name='plug' size='big'/>
            </Grid.Column>
            <Grid.Column width={6} className='description-table-element'>
              <div>
                <Header as='h3'>Take it easy</Header>
                Populer applications will integrated our system.
              </div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon name='code' size='big'/>
            </Grid.Column>
            <Grid.Column width={6} className='description-table-element'>
              <div>
                <Header as='h3'>Your turn</Header>
                We have public api with running graphql. Use our api and build amazing things...
              </div>
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
                We have to pay bills sended from <a href='https://digitalocean.com'>Digitalocean</a> and <a href='https://namecheap.com'>NameCheap</a>.
                if you join us, you will be a great support.
                But we ask you to donate if there is a lot of money ;) <br />
                <List>
                  <List.Item>
                    <List.Icon name='bitcoin' color='yellow' />
                    <List.Content>a3s2das32d1as32d1a3s2da3ds21</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='bitcoin' color='blue' />
                    <List.Content>a3s2das32d1as32d1a3s2da3ds21</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='bitcoin' color='blue' />
                    <List.Content>a3s2das32d1as32d1a3s2da3ds21</List.Content>
                  </List.Item>
                </List><br />
                <Header as='h1' size='huge'>Contribute Our Repos on Github</Header>
                <List>
                  <List.Item>
                    <List.Icon name='github' />
                    <List.Content><a href='https://github.com/cemkiy/kafa-react'>kafa-react front-end repo</a></List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='github' />
                    <List.Content><a href='https://github.com/cemkiy/kafa-node'>kafa-node is back-end repo</a></List.Content>
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
