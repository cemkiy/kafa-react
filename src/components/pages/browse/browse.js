import React, {Component} from 'react'
import './browse.css'
import Filter from '../../../components/sub-components/filter/filter'
import TorrentTable from '../../../components/sub-components/torrent-table/torrent-table'

export default class Browse extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div id='content'>
      <Filter />
      <TorrentTable />
    </div>)
  }
}
