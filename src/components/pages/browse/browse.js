import React, { Component } from 'react'
import './browse.css'
import queryString from 'query-string'
import Filter from '../../../components/sub-components/filter/filter'
import TorrentTable from '../../../components/sub-components/torrent-table/torrent-table'
import { Segment, Loader, Dimmer } from 'semantic-ui-react'
import YTS from 'yts'

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
      loading_torrents: false,
      playing: false,
      loading_movie: false
    }
  }

  getTorrents = () => {
    this.setState({ loading_torrents: true, torrents: [] })
    YTS.listMovies({ limit: 10, sort_by: 'year' }).then(resp => {
      this.setState({ loading_torrents: false })

      resp.movies.forEach(movie => {
        const torrent = {
          id: movie.id,
          source: 'yts',
          source_link: movie.url,
          category: 'movies',
          genres: movie.genres.join(', '),
          imdb_rate: movie.rating,
          imdb_code: movie.imdb_code,
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
    this.setState({ filter: mockFilter }, () => {
      this.getTorrents()
    })
  }

  handleTorrentTableChange = (action) => {
    if (action.pagination !== '') {
      const mockFilter = this.state.filter
      if (action.pagination === 'next' && this.state.torrents.length > 1) {
        mockFilter.page = mockFilter.page + 1
        this.setState({ filter: mockFilter }, () => {
          this.getTorrents()
        })
      } else if (action.pagination === 'prev' && mockFilter.page > 1) {
        mockFilter.page = mockFilter.page - 1
        this.setState({ filter: mockFilter }, () => {
          this.getTorrents().bind(this)
        })
      }
    }

    if (action.magnet_url !== '') {
      this.setState({ loading_movie: true, playing: true })
      this.play(this.state.webtorrent, action.magnet_url)
    }
  }

  play = (client, magnetURL) => {
    console.log('magnet', magnetURL)

    client.add(magnetURL, (torrent) => {
      console.log('---', torrent);
      const interval = setInterval(() => {
        console.log('[+] Progress: ' + (torrent.progress * 100).toFixed(1) + '%')
        this.setState({ torrentProgress: (torrent.progress * 100).toFixed(1) + '%' })
      }, 5000)
      torrent.on('done', () => {
        console.log('Progress: 100%')
        clearInterval(interval)
      })

      this.setState({
        torrentInfoHash: torrent.infoHash,
        torrentMagnetURI: torrent.magnetURI,
        torrentName: torrent.name,
        torrentFiles: torrent.files,
        webtorrent: client
      })

      this.state.torrentFiles.map((file, i) => {
        console.log(file.torrentFileBlobURL)
        if (file.name.endsWith('.mp4')) {
          this.setState({ loading_movie: false })
          return (

            file.appendTo('#video')
          )
        }

        return null
      })
    })
  }

  componentDidMount () {
    const mockFilter = this.state.filter
    if (queryString.parse(this.props.location.search).sort_field) {
      mockFilter.sort_field = queryString.parse(this.props.location.search).sort_field
    }
    this.setState({ filter: mockFilter }, () => {
      this.getTorrents()
    })

    const WebTorrent = require('webtorrent')
    const client = new WebTorrent()
    this.setState({ webtorrent: client })

    client.on('error', err => {
      console.log('[+] Webtorrent error: ' + err.message)
    })
  }

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
        <Segment id='video' loading={this.state.loading_movie} placeholder className={(this.state.playing ? '' : 'hide')} />
        <Filter onChange={this.handleFilterChange} />
        <Segment loading={this.state.loading_torrents} basic>
          <Dimmer active={this.state.loading_torrents}>
            <Loader>Just one maybe two, three, four... second</Loader>
          </Dimmer>
          <TorrentTable onChange={this.handleTorrentTableChange} torrents={this.state.torrents} loading={this.state.loading} />
        </Segment>
      </div>
    )
  }
}
