import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './sidebar.css';
import logo from '../../logo.png';
import { Menu, Image } from 'semantic-ui-react'

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.getTorrents = this.getTorrents.bind(this);
    this.state = { activeItem: 'browse' }
  }

  getTorrents(event, data) {
    if(data.name === 'browse')
      this.props.history.push("/browse");
    else if(data.name === 'recent')
      this.props.history.push("/browse?order_by=date");
    else if(data.name === 'populer')
      this.props.history.push("/browse?order_by=downlad_count");
  }

  render() {
    const { activeItem } = this.state

    return (
        <Menu className='sidebar-style' pointing secondary vertical>
          <Menu.Item className='menu-items'><Image src={logo} size='small' className ='sidebar-logo' circular /></Menu.Item>
          <Menu.Item name='browse' active={activeItem === 'Browse Torrents'} onClick={this.getTorrents} className='menu-items' />
          <Menu.Item name='recent' active={activeItem === 'Recent Torrents'} onClick={this.getTorrents} className='menu-items' />
          <Menu.Item name='populer' active={activeItem === 'Populer Torrents'} onClick={this.getTorrents} className='menu-items' />
          <Menu.Item name='Support Us' active={activeItem === 'Support Us'} onClick={this.handleItemClick} className='menu-items' />
        </Menu>
    )
  }
}


export default withRouter(Sidebar)
