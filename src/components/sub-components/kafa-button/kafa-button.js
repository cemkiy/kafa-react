import React, {Component} from 'react'
import './kafa-button.css'
import kafa from '../../../assets/img/kafa.png'
import kafaHover from '../../../assets/img/kafa_hover.png'
import {Image, Label} from 'semantic-ui-react'

export default class KafaButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isHovered: false
    }
    this.kafaHover = this.kafaHover.bind(this)
  }

  kafaHover () {
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  render () {
    return (<Label as='a' onMouseEnter={this.kafaHover} onMouseLeave={this.kafaHover} className='shake action-button'>
      <Image avatar='avatar' spaced='right' src={this.state.isHovered
        ? kafaHover
        : kafa} />
      <Label basic='basic' color='grey' active pointing='left'>2,048 Kafa</Label>
    </Label>)
  }
}
