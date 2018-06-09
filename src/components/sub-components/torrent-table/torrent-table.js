import React, {Component} from 'react'
import './torrent-table.css'
import satellite from '../../../assets/img/satellite.gif'
import kafa from '../../../assets/img/kafa.png'
import {Icon, Table, Button, Image, Label, Menu} from 'semantic-ui-react'
import TorrentSummary from '../../../components/sub-components/torrent-summary/torrent-summary'
import KafaButton from '../../../components/sub-components/kafa-button/kafa-button'

export default class TorrentTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      icons: {
        'musics': 'music',
        'applications': 'bug',
        'movies': 'film',
        'tv/shows': 'tv',
        'games': 'game',
        'documents': 'spy',
        'xxx': 'heart'
      }
    }
  }

  bytesToSize = (bytes) => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
  }

  getRandomQuote = () => {
    let quotes = [
      'the ultimate goal of mankind is to drink milkshake.',
      'do not take it if people you do not know give you sugar.',
      'what is the favorite thing of hipsters ? - hamsters',
      'sometimes life is like an iphone case with a rabbit ear in the hands of a girl.'
    ]
    this.setState({quoteOfLoading: quotes[Math.floor(Math.random() * quotes.length)]})
  }

  nextHandleClick = () => {
    this.props.onChange('next') // trigger parent page
  }

  prevHandleClick = () => {
    this.props.onChange('prev') // trigger parent page
  }

  componentWillReceiveProps (nextProps) {
    this.getRandomQuote()
  }

  render () {
    return (<div className='torrent-table'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell><Icon name='paw' />Name</Table.HeaderCell>
            <Table.HeaderCell><Icon name='file' />Size</Table.HeaderCell>
            <Table.HeaderCell>
              <Image src={satellite} avatar />
                Leechs/Seeds
            </Table.HeaderCell>
            <Table.HeaderCell><Icon name='tag' />Tag</Table.HeaderCell>
            <Table.HeaderCell>
              <Image avatar spaced='right' src={kafa} />
                  Kafa
            </Table.HeaderCell>
            <Table.HeaderCell><Icon name='download' />Download</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.props.torrents.map(torrent =>
              <Table.Row key={torrent.id}>
                <Table.Cell width='4'>
                  <TorrentSummary torrent={torrent} />
                </Table.Cell>
                <Table.Cell width='1' textAlign='center'><Label basic><Icon name='file' />{this.bytesToSize(torrent.size)}</Label></Table.Cell>
                <Table.Cell width='2' textAlign='center'>
                  <Icon name='long arrow down' />78/800<Icon name='long arrow up' />
                </Table.Cell>
                <Table.Cell width='2' textAlign='center'>
                  <Icon name={this.state.icons[torrent.tag.name]} color={torrent.tag.name === 'xxx' ? 'red' : 'black'} />
                  &nbsp;{torrent.tag.name}
                </Table.Cell>
                <Table.Cell width='4' textAlign='center'>
                  <KafaButton torrent={torrent} />
                </Table.Cell>
                <Table.Cell width='3' textAlign='center'>
                  <Button.Group>
                    <Button className='action-button'><Icon name='save' /></Button>
                    <Button.Or />
                    <Button className='action-button'><Icon name='magnet' /></Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>)
          }
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon onClick={this.prevHandleClick}>
                  <Icon name='chevron left' />&nbsp;Prev
                </Menu.Item>
                <Menu.Item as='a' icon onClick={this.nextHandleClick}>
                  Next&nbsp;<Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>)
  }
}
