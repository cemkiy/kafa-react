import React, { Component } from 'react'
import './torrent-table.css'
import satellite from '../../../assets/img/satellite.gif'
import { Icon, Table, Button, Image, Label, Menu } from 'semantic-ui-react'
import TorrentSummary from '../../../components/sub-components/torrent-summary/torrent-summary'
import IMDBButton from '../../../components/sub-components/imdb-button/imdb-button'
import yts from '../../../assets/img/yts.svg'

export default class TorrentTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      torrents: props.torrents,
      icons: {
        musics: 'music',
        applications: 'bug',
        movies: 'film',
        'tv/shows': 'tv',
        games: 'game',
        documents: 'spy',
        xxx: 'heart'
      }
    }
  }

  // bytesToSize = (bytes) => {
  //   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  //   if (bytes === 0) return '0 Byte'
  //   const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  //   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
  // }

  componentDidMount () {
    // let magnetURL = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
    // console.log("-------", magnetURL)
    // const WebTorrent = require('webtorrent')
    // const client = new WebTorrent()
    // this.setState({ webtorrent: client })
    //
    // client.on('error', err => {
    //   console.log('[+] Webtorrent error: ' + err.message)
    // })
    //
    // client.add(magnetURL, (torrent) => {
    //   const interval = setInterval(() => {
    //     console.log('[+] Progress: ' + (torrent.progress * 100).toFixed(1) + '%')
    //     this.setState({ torrentProgress: (torrent.progress * 100).toFixed(1) + '%' })
    //   }, 5000)
    //   torrent.on('done', () => {
    //     console.log('Progress: 100%')
    //     clearInterval(interval)
    //   })
    //
    //   this.setState({
    //     torrentInfoHash: torrent.infoHash,
    //     torrentMagnetURI: torrent.magnetURI,
    //     torrentName: torrent.name,
    //     torrentFiles: torrent.files
    //   })
    //
    //   this.state.torrentFiles.map((file, i) => {
    //     file.appendTo('body');
    //   })
    // })
  }

  handleNextClick = () => {
    this.props.onChange('next') // trigger parent page
  }

  handlePrevClick = () => {
    this.props.onChange('prev') // trigger parent page
  }

  componentDidReceiveProps (nextProps) {
    this.setState({ torrents: nextProps.torrents })
  }

  render () {
    return (
      <div className='torrent-table'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><Icon name='paw' />Name</Table.HeaderCell>
              <Table.HeaderCell><Icon name='shop' />Source</Table.HeaderCell>
              <Table.HeaderCell><Icon name='file' />Size</Table.HeaderCell>
              <Table.HeaderCell>
                <Image src={satellite} avatar />
                Peers/Seeds
              </Table.HeaderCell>
              <Table.HeaderCell><Icon name='tag' />Category</Table.HeaderCell>
              <Table.HeaderCell><Icon name='tags' />Genre</Table.HeaderCell>
              <Table.HeaderCell><Icon name='imdb' size='large' />IMDb</Table.HeaderCell>
              <Table.HeaderCell><Icon name='download' />Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
            this.props.torrents.map(torrent =>
              <Table.Row key={torrent.id}>
                <Table.Cell width='4'>
                  <TorrentSummary torrent={torrent} />
                </Table.Cell>
                <Table.Cell width='1'>
                  <Image size='mini' src={yts} href={torrent.source_link} />
                </Table.Cell>
                <Table.Cell width='1' textAlign='center'><Label basic><Icon name='file' />{torrent.size}</Label></Table.Cell>
                <Table.Cell width='2' textAlign='center'>
                  <Icon name='long arrow down' />{torrent.peers}/{torrent.seeds}<Icon name='long arrow up' />
                </Table.Cell>
                <Table.Cell width='1' textAlign='center'>
                  <Icon name={this.state.icons[torrent.category]} />
                  &nbsp;{torrent.category}
                </Table.Cell>
                <Table.Cell width='2' textAlign='center'>
                  {torrent.genres}
                </Table.Cell>
                <Table.Cell width='1' textAlign='center'>
                  <IMDBButton torrent={torrent} />
                </Table.Cell>
                <Table.Cell width='3' textAlign='center'>
                  <Button.Group>
                    <Button className='action-button'><Icon name='video play' /></Button>
                    <Button.Or />
                    <Button className='action-button' onClick={() => { navigator.clipboard.writeText(torrent.magnet_url) }}>
                      <Icon name='magnet' />
                    </Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>)
          }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='6' />
              <Table.HeaderCell colSpan='6'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon onClick={this.handlePrevClick}>
                    <Icon name='chevron left' />&nbsp;Prev
                  </Menu.Item>
                  <Menu.Item as='a' icon onClick={this.handleNextClick}>
                    Next&nbsp;<Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}
