import React, {Component} from 'react'
import './share.css'
import TorrentForm from '../../../components/sub-components/torrent-form/torrent-form'
import {CreateTorrent} from '../../../api/torrent'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class Share extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render = () => {
    return (<div className='share-section'>
        <TorrentForm />
      </div>)
  }
}
