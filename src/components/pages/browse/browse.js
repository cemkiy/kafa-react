import React, {Component} from 'react'
import './browse.css'
import queryString from 'query-string'
import Filter from '../../../components/sub-components/filter/filter'
import TorrentTable from '../../../components/sub-components/torrent-table/torrent-table'
import {Segment, Loader, Dimmer} from 'semantic-ui-react'
import {Torrents} from '../../../api/torrent'
import {ErrorAnalysis} from '../../../middleware/error-handler'

export default class Browse extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: {
        limit: 5,
        page: 1,
        sort_field: 'created_at'
      },
      torrents: [],
      loading: false
    }
  }

  getTorrents = () => {
    Torrents(this.state.filter, [
      'id',
      'info_hash',
      'name',
      'description',
      'size',
      {'tag': ['name', 'categories']},
      'kafa',
      'screens',
      'created_at'
    ]).then(data => {
      this.setState({
        torrents: data.torrents,
        loading: false
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
      this.setState({
        torrents: [],
        loading: false
      })
    })
  }

  filterHandleChange = (tags) => {
    let mockFilter = this.state.filter
    if (tags.length === 0) {
      delete mockFilter['tags']
    } else {
      mockFilter['tags'] = tags
    }
    this.setState({filter: mockFilter, loading: true}, () => {
      this.getTorrents()
    })
  }

  paginatorHandleChange = (type) => {
    let mockFilter = this.state.filter
    if (type === 'next' && this.state.torrents.length > 1) {
      mockFilter.page = mockFilter.page + 1
      this.setState({filter: mockFilter, loading: true}, () => {
        this.getTorrents()
      })
    } else if (type === 'prev' && mockFilter.page > 1) {
      mockFilter.page = mockFilter.page - 1
      this.setState({filter: mockFilter, loading: true}, () => {
        this.getTorrents()
      })
    }
  }

  componentWillMount () {
    let mockFilter = this.state.filter
    if (queryString.parse(this.props.location.search).sort_field) {
      mockFilter['sort_field'] = queryString.parse(this.props.location.search).sort_field
    }
    this.setState({filter: mockFilter, loading: true}, () => {
      this.getTorrents()
    })
  }

  componentWillReceiveProps (nextProps) { // watch query params
    let mockFilter = this.state.filter
    let queryParams = queryString.parse(nextProps.location.search)
    if (queryParams.name || queryParams.name === '') {
      mockFilter['name'] = queryParams.name
    }
    if (queryParams.sort_field) {
      mockFilter['sort_field'] = queryParams.sort_field
    }
    this.setState({filter: mockFilter, loading: true}, () => {
      this.getTorrents()
    })
  }

  render () {
    return (<div id='content'>
      <Filter onChange={this.filterHandleChange} />
      <Segment basic>
        <Dimmer active={this.state.loading}>
          <Loader active={this.state.loading}>Just one maybe two, three, four... second</Loader>
        </Dimmer>
        <TorrentTable onChange={this.paginatorHandleChange} torrents={this.state.torrents} loading={this.state.loading} />
      </Segment>
    </div>)
  }
}
