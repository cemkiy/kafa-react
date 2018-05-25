import React, {Component} from 'react'
import './torrent-table.css'
import satellite from '../../../assets/img/satellite.gif'
import kafa from '../../../assets/img/kafa.png'
import {Icon, Table, Button, Image, Label, Pagination} from 'semantic-ui-react'
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
    if (bytes == 0) return '0 Byte'
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
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
                <Table.Cell width='2' textAlign='center'><Label basic><Icon name='file' />{this.bytesToSize(torrent.size)}</Label></Table.Cell>
                <Table.Cell width='2' textAlign='center'>
                  <Icon name='long arrow down' />78/800<Icon name='long arrow up' />
                </Table.Cell>
                <Table.Cell width='2' textAlign='center'>
                  <Icon name={this.state.icons[torrent.tag.name]} color={torrent.tag.name === 'xxx' ? 'red' : 'black'} />
                  &nbsp;{torrent.tag.name}
                </Table.Cell>
                <Table.Cell width='2' textAlign='center'>
                  <KafaButton torrent={torrent} />
                </Table.Cell>
                <Table.Cell width='4' textAlign='center'>
                  <Button.Group>
                    <Button className='action-button'><Icon name='save' /></Button>
                    <Button.Or />
                    <Button className='action-button'><Icon name='magnet' /></Button>
                  </Button.Group>
                </Table.Cell>
              </Table.Row>)
          }
        </Table.Body>
      </Table>
      <div className='paginator'>
        <Pagination defaultActivePage={5} totalPages={10} />
      </div>
    </div>)
  }
}
