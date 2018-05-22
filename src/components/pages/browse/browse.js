import React, {Component} from 'react'
import './browse.css'
import queryString from 'query-string'
import Filter from '../../../components/sub-components/filter/filter'
import TorrentTable from '../../../components/sub-components/torrent-table/torrent-table'
import {Torrents} from '../../../api/torrent'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class Browse extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: {},
      torrents: []
    }
  }

  getTorrents = () => {
    Torrents(this.state.filter, [
      'id',
      'info_hash',
      'name',
      'description',
      'size',
      {'tag':['name', 'categories']},
      'kafa',
      'screens',
      'created_at'
    ]).then(data => {
      console.log(data.torrents);
      this.setState({
        torrents: data.torrents
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        torrents: []
      })
    })
  }

  filterHandleChange = (categories) => {
    let mockFilter = this.state.filter
    mockFilter['categories'] = categories
    this.setState({filter: mockFilter})
  }

  componentDidMount () {
    this.setState({parsedQueryParams: queryString.parse(this.props.location.search)}, () => {
      this.getTorrents()
    })
  }

  componentWillReceiveProps (nextProps) { // watch query params
    this.setState({parsedQueryParams: queryString.parse(nextProps.location.search)}, () => {
      this.getTorrents()
    })
  }

  render () {
    return (<div id='content'>
      <Filter onChange={this.filterHandleChange} />
      <TorrentTable torrents={this.state.torrents} />
    </div>)
  }
}
