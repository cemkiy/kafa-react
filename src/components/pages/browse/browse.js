import React, { Component } from 'react'
import './browse.css'
import queryString from 'query-string'
import Filter from '../../../components/sub-components/filter/filter'
import TorrentTable from '../../../components/sub-components/torrent-table/torrent-table'
import { Segment, Loader, Dimmer } from 'semantic-ui-react'
import yts from 'yts'

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
    yts.listMovies({ limit: 10, sort_by: 'year' }).then(resp => {
      resp.movies.forEach(movie => {
        const torrent = {
          id: movie.id,
          source: 'yts',
          source_link: movie.url,
          tag: {
            name: 'movies'
          },
          kafa: movie.rating,
          screens: [movie.medium_cover_image],
          name: movie.title + ' 1080p' + ' (' + movie.year + ') ',
          created_at: movie.date_uploaded,
          description: movie.summary
        }

        for (let i = 0; i < movie.torrents.length; i++) {
          if (movie.torrents[i].quality === '1080p') {
            torrent.size = movie.torrents[i].size
            torrent.magnet_url = movie.torrents[i].magnet_url
            torrent.seeds = movie.torrents[i].seeds
            torrent.peers = movie.torrents[i].peers
            const torrents = this.state.torrents
            torrents.push(torrent)

            this.setState({ torrents: torrents })
            break
          }
        }
      })
    })
  }

  handleFilterChange = (tags) => {
    const mockFilter = this.state.filter
    if (tags.length === 0) {
      delete mockFilter.tags
    } else {
      mockFilter.tags = tags
    }
    this.setState({ filter: mockFilter, loading: false }, () => {
      this.getTorrents()
    })
  }

  handlePaginatorChange = (type) => {
    const mockFilter = this.state.filter
    if (type === 'next' && this.state.torrents.length > 1) {
      mockFilter.page = mockFilter.page + 1
      this.setState({ filter: mockFilter, loading: false }, () => {
        this.getTorrents()
      })
    } else if (type === 'prev' && mockFilter.page > 1) {
      mockFilter.page = mockFilter.page - 1
      this.setState({ filter: mockFilter, loading: false }, () => {
        this.getTorrents().bind(this)
      })
    }
  }

  componentDidMount () {
    const mockFilter = this.state.filter
    if (queryString.parse(this.props.location.search).sort_field) {
      mockFilter.sort_field = queryString.parse(this.props.location.search).sort_field
    }
    this.setState({ filter: mockFilter, loading: false }, () => {
      this.getTorrents()
    })
  }

  // componentDidMount () {
  //   // Sintel, a free, Creative Commons movie
  //   const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
  //
  //   const WebTorrent = require('webtorrent')
  //   const client = new WebTorrent()
  //
  //   client.on('error', err => {
  //     console.log('[+] Webtorrent error: ' + err.message)
  //   })
  //
  //   client.add(torrentId, (torrent) => {
  //     const interval = setInterval(() => {
  //       // console.log('[+] Progress: ' + (torrent.progress * 100).toFixed(1) + '%')
  //       this.setState({ torrentProgress: (torrent.progress * 100).toFixed(1) + '%' })
  //     }, 5000)
  //     torrent.on('done', () => {
  //       console.log('Progress: 100%')
  //       clearInterval(interval)
  //     })
  //
  //     this.setState({
  //       torrentInfoHash: torrent.infoHash,
  //       torrentMagnetURI: torrent.magnetURI,
  //       torrentName: torrent.name,
  //       torrentFiles: torrent.files
  //     })
  //
  //     // TODO Figure out a better way to render these files
  //     this.state.torrentFiles.map((file, i) => {
  //       file.appendTo('body')
  //     })
  //   })
  // }

  componentWillReceiveProps (nextProps) { // watch query params
    const mockFilter = this.state.filter
    const queryParams = queryString.parse(nextProps.location.search)
    if (queryParams.name || queryParams.name === '') {
      mockFilter.name = queryParams.name
    }
    if (queryParams.sort_field) {
      mockFilter.sort_field = queryParams.sort_field
    }
    // this.setState({ filter: mockFilter, loading: false }, () => {
    //   this.getTorrents()
    // })
  }

  render () {
    return (
      <div id='content'>
        <Filter onChange={this.handleFilterChange} />
        <Segment basic>
          <Dimmer active={this.state.loading}>
            <Loader active={this.state.loading}>Just one maybe two, three, four... second</Loader>
          </Dimmer>
          <TorrentTable onChange={this.handlePaginatorChange} torrents={this.state.torrents} loading={this.state.loading} />
        </Segment>
      </div>
    )
  }
}
