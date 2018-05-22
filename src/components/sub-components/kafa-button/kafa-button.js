import React, {Component} from 'react'
import './kafa-button.css'
import kafa from '../../../assets/img/kafa.png'
import kafaHover from '../../../assets/img/kafa_hover.png'
import {Image, Label} from 'semantic-ui-react'
import {IncrementKafa} from '../../../api/kafa'
import {ErrorAnalysis} from '../../../middleware/error-handler'

// TODO: add NumberFormat lib
export default class KafaButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHovered: false,
      kafaCount: this.props.torrent.kafa
    }
  }

  kafaHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  incrementKafa = () => {
    IncrementKafa({torrent_id: this.props.torrent.id}, [
      {'torrent':['kafa']}
    ]).then(data => {
      this.setState({
        kafaCount: data.incrementKafa.torrent.kafa
      })
    }).catch(err => {
      ErrorAnalysis(err, this.props.history)
    })
  }

  render () {
    return (<Label as='a' onMouseEnter={this.kafaHover} onMouseLeave={this.kafaHover} onClick={this.incrementKafa} className='shake action-button'>
      <Image avatar spaced='right' src={this.state.isHovered
        ? kafaHover
        : kafa} />
      <Label basic color='grey' active pointing='left'>{this.state.kafaCount} Kafa</Label>
    </Label>)
  }
}
