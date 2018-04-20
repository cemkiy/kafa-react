import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './sidebar.css';
import logo from '../../logo.gif';
import { Menu, Image } from 'semantic-ui-react'

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'browse',
      shareDisplay: 'none',
      role: localStorage.getItem('role')
    }
    this.getTorrents = this.getTorrents.bind(this);
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
          {(this.state.role === 'captain' || this.state.role === 'privateer') && (
            <Link to='/share'><Menu.Item name='share' active={activeItem === 'Share Torrents'} className='menu-items' /></Link>
          )}
          <Menu.Item name='browse' active={activeItem === 'Browse Torrents'} onClick={this.getTorrents} className='menu-items' />
          <Menu.Item name='recent' active={activeItem === 'Recent Torrents'} onClick={this.getTorrents} className='menu-items' />
          <Menu.Item name='populer' active={activeItem === 'Populer Torrents'} onClick={this.getTorrents} className='menu-items' />
          <Menu.Item name='support us' active={activeItem === 'Support Us'} onClick={this.handleItemClick} className='menu-items' />
        </Menu>
    )
  }
}


export default withRouter(Sidebar)
