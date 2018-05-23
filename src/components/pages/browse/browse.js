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
      filter: {
        sort_field: 'created_at'
      },
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

  filterHandleChange = (tags) => {
    let mockFilter = this.state.filter
    mockFilter['tags'] = tags
    this.setState({filter: mockFilter}, () => {
      this.getTorrents()
    })
  }

  componentDidMount () {
    let mockFilter = this.state.filter
    if (queryString.parse(this.props.location.search).sort_field) {
      mockFilter['sort_field'] = queryString.parse(this.props.location.search).sort_field
    }
    this.setState({filter: mockFilter}, () => {
      this.getTorrents()
    })
  }

  componentWillReceiveProps (nextProps) { // watch query params
    let mockFilter = this.state.filter
    if (queryString.parse(this.props.location.search).sort_field) {
      mockFilter['sort_field'] = queryString.parse(nextProps.location.search).sort_field
    }
    this.setState({filter: mockFilter}, () => {
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
