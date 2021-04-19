import React, { Component } from 'react'
import './deck.css'
import logo from '../../../assets/img/logo.gif'
import weNeedYou from '../../../assets/img/weneedyou.png'
import webtorrentLogo from '../../../assets/img/webtorrent.png'
import {
  Icon,
  Grid,
  Image,
  Button,
  Header,
  List,
  Label,
  Item
} from 'semantic-ui-react'

export default class Deck extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleSignIn = (event) => {
    this.props.history.push('/browse')
    event.preventDefault()
  }

  render () {
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
                Welcome to&nbsp;
                <strong>kafa.io</strong>. This is a&nbsp;
                <strong>most useful torrent site</strong>. You can&nbsp;
                <strong>download/upload</strong>&nbsp;
                and&nbsp;
                <strong>watch</strong>(if has a video file)&nbsp;
                the file you want. At the same time the&nbsp;
                <strong>kafa.io</strong>&nbsp;
                is a BitTorrent client.<br />
                <List bulleted>
                  <List.Item>
                    <strong>ThePirateBay</strong> connected.
                  </List.Item>
                  <List.Item>
                    <strong>RARBG</strong> in progress.
                  </List.Item>
                </List>
              </div>
              <div className='deck-button-group'>
                <Button animated='fade' onClick={this.handleSignIn} icon color='black' size='huge'>
                  <Button.Content hidden><Icon corner name='ship' />&nbsp;All Hand Hoy!</Button.Content>
                  <Button.Content visible><Icon corner name='share' />&nbsp;Start Using</Button.Content>
                </Button>
              </div>
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
                      kafa.io is a bittorrent client. You can download/upload operations on this site.
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
                    <Item.Header><Icon name='code' />Your turn</Item.Header>
                    <Item.Description>
                      kafa.io is fully open source. You can be a contributer.
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <Icon name='plug' />Take it easy
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
              <Image src={weNeedYou} />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h1' size='huge'>We Need You! Support Us...</Header>
              <div>
                Kafa.io is started hobby project. Our goal is to set up a platform to share files freely.&nbsp;
                But we have some expenses. We have to pay bills sended from NameCheap and Netlify.
                If you join us, you will be a great support. But we ask you to donate if there is a lot of money.
                <br />
                <List>
                  <List.Item as='a' onClick={() => { navigator.clipboard.writeText('32mLAFhCJ8m75jsGtdwWK6B4ScKtKn6Avb') }}>
                    <List.Content>
                      <Label>
                        <Icon name='bitcoin' />
                          &nbsp;bitcoin
                        <Label.Detail>32mLAFhCJ8m75jsGtdwWK6B4ScKtKn6Avb</Label.Detail>
                      </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item as='a' onClick={() => { navigator.clipboard.writeText('0x8172Dd888EcBC9eBAF7dB95dB4e4b1Dc601E4B81') }}>
                    <List.Content>
                      <Label>
                        <Icon name='ethereum' />
                            &nbsp;ethereum
                        <Label.Detail>0x8172Dd888EcBC9eBAF7dB95dB4e4b1Dc601E4B81</Label.Detail>
                      </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item as='a' onClick={() => { navigator.clipboard.writeText('FMAIJ6XMJSCXNAN3UKJP5K34LW436ZMHYGWCFMCBLZWWIYMMV6V5SULX6A') }}>
                    <List.Content>
                      <Label>
                        <Icon name='tablet' />
                            &nbsp;algorand
                        <Label.Detail>FMAIJ6XMJSCXNAN3UKJP5K34LW436ZMHYGWCFMCBLZWWIYMMV6V5SULX6A</Label.Detail>
                      </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item as='a' onClick={() => { navigator.clipboard.writeText('GDQP2KPQGKIHYJGXNUIYOMHARUARCA7DJT5FO2FFOOKY3B2WSQHG4W37:::ucl:::362767634') }}>
                    <List.Content>
                      <Label>
                        <Icon name='tablet' />
                          &nbsp;stellar lumens
                        <Label.Detail>GDQP2KPQGKIHYJGXNUIYOMHARUARCA7DJT5FO2FFOOKY3B2WSQHG4W37:::ucl:::362767634</Label.Detail>
                      </Label>
                    </List.Content>
                  </List.Item>
                </List><br />
                <Header as='h1' size='huge'>Contribute Our Repos on Github</Header>
                <List>
                  <List.Item>
                    <List.Content>
                      <Label color='black' as='a' href='https://github.com/cemkiy/kafa-react' target='_blank'>
                        <Icon name='github' />
                            &nbsp;Repo
                        <Label.Detail>github.com/cemkiy/kafa-react</Label.Detail>
                      </Label>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Label color='red' href='https://webtorrent.io/' image>
                        <Image size='mini' src={webtorrentLogo} />
                        Support
                        <Label.Detail>We love WebTorrent</Label.Detail>
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
