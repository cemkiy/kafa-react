import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import './sidebar.css'
import logo from '../../../assets/img/logo.gif'
import {Menu, Image, Icon} from 'semantic-ui-react'

export class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItem: 'browse',
      shareDisplay: 'none',
      minion: false,
      role: window.localStorage.getItem('role')
    }
  }

  render () {
    const {activeItem} = this.state

    return (<Menu className='sidebar-style' pointing secondary vertical icon='labeled'>
      <Menu.Item className='menu-items'><Image src={logo} size='small' className='sidebar-logo' /></Menu.Item>
      {(this.state.role === 'captain' || this.state.role === 'privateer') && (<Link to='/share'><Menu.Item name='share'
        active={activeItem === 'Share Torrents'} className='menu-items' ><Icon name='lab' />Share</ Menu.Item></Link>)}
      <Link to='/browse'>
        <Menu.Item name='browse' active={activeItem === 'Browse Torrents'} className='menu-items'>
          <Icon name='browser' />Browse
        </ Menu.Item>
      </Link>
      <Link to='/browse?sort_field=created_at'>
        <Menu.Item name='recent' active={activeItem === 'Recent Torrents'} className='menu-items'>
          <Icon name='time' />Recent
        </ Menu.Item>
      </Link>
      <Link to='/browse?sort_field=downlad_count'>
        <Menu.Item name='populer' active={activeItem === 'Populer Torrents'} className='menu-items'>
          <Icon name='talk outline' />Populer
        </ Menu.Item>
      </Link>
      <Menu.Item name='support us' active={activeItem === 'Support Us'} className='menu-items'>
        <Icon name='rocket' />Support Us
      </ Menu.Item>
    </Menu>)
  }
}

export default withRouter(Sidebar)
