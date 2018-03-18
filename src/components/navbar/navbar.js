import React, { Component } from 'react'
import './navbar.css';
import { Menu, Label, Icon, Image, Dropdown } from 'semantic-ui-react'

export default class Navbar extends Component {
  render() {
    return (
        <Menu attached='top' className="navbar">
          <Menu.Item className="navbar-label">
            <Label className="navbar-label" size="massive">
              Search Torrents
            </Label>
          </Menu.Item>
          <Menu.Menu className="search-input">
            <div className='ui aligned category search item search-input'>
              <div className='ui transparent icon input'>
                <input className='prompt' type='text' placeholder='Search Here...'/>
                <i className='search link icon' />
              </div>
              <div className='results' />
            </div>
          </Menu.Menu>
          <Menu.Item >
            <Dropdown item icon='setting' className="settings-icon" simple direction="left">
              <Dropdown.Menu>
                <Dropdown.Item text='Profile' />
                <Dropdown.Item text='Account Settings' />
                <Dropdown.Divider />
                <Dropdown.Item icon='sign out' text='Logout' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AHJGuP0nmqfIv4Z0lWketAX7Q1KF21RXSWo2CkIOq6DSep2Y' avatar />
          </Menu.Item>
        </Menu>
    )
  }
}
