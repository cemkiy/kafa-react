import React, { Component } from 'react'
import './imdb-button.css'
import { Label } from 'semantic-ui-react'

export default class KafaButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHovered: false,
      imdbRate: this.props.torrent.imdb_rate,
      imdbCode: this.props.torrent.imdb_code
    }
  }

  imdbHover =() => {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  render () {
    return (
      <Label
        as='a' target='_blank' className='blacktext shake' href={'https://www.imdb.com/title/' + this.state.imdbCode} size='large'
        onMouseEnter={this.imdbHover} onMouseLeave={this.imdbHover}
      >
        IMDb
        <Label.Detail className='blacktext'>{this.state.imdbRate}</Label.Detail>
      </Label>
    )
  }
}
