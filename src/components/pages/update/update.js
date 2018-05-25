import React, {Component} from 'react'
import './update.css'
import TorrentForm from '../../../components/sub-components/torrent-form/torrent-form'
import {TorrentById} from '../../../api/torrent'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class Update extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    TorrentById({
      id: this.props.match.params.torrentId
    }, [
      'id',
      'name',
      {'user': ['id']},
      'description',
      'size',
      'imdb_id',
      'info_link',
      'info_hash',
      'screens',
      {'tag':['name', 'categories']},
      {'language': ['audios', 'subtitles']}
    ]).then(data => {
      this.setState({torrent: data.torrentById})
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
    })
  }

  render = () => {
    return (<div className='share-section'>
        <TorrentForm torrent={this.state.torrent} />
      </div>)
  }
}
