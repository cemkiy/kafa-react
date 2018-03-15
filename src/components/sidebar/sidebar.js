import React, { Component } from 'react'
import './sidebar.css';
import logo from '../../logo.svg';
import { Menu, Image } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Image src={logo} size='small' className ="sidebar-logo" circular />
        <Menu.Item name='Browse Torrents' active={activeItem === 'Browse Torrents'} onClick={this.handleItemClick} className="menu-items" />
        <Menu.Item name='Recent Torrents' active={activeItem === 'Recent Torrents'} onClick={this.handleItemClick} className="menu-items" />
        <Menu.Item name='Populer Torrents' active={activeItem === 'Populer Torrents'} onClick={this.handleItemClick} className="menu-items" />
        <Menu.Item name='TV Shows' active={activeItem === 'TV Shows'} onClick={this.handleItemClick} className="menu-items" />
      </Menu>
    )
  }
}
