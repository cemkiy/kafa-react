import React, { Component } from 'react'
import './navbar.css'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Label, Dropdown } from 'semantic-ui-react'
import Gravatar from 'react-gravatar'

export class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: JSON.parse(window.localStorage.getItem('user')),
      role: window.localStorage.getItem('role')
    }
  }

  searchHandleChange = (event, data) => {
    this.props.history.push({
      pathname: '/browse',
      search: '?name=' + event.target.value
    })
  }

  logout = () => {
    window.localStorage.clear()
    this.props.history.push('/')
  }

  render () {
    return (
      <Menu attached='top' className='navbar'>
        <Menu.Item className='navbar-label'>
          <Label className='navbar-label' size='massive'>
            <span className='st'>Search Torrents</span>
          </Label>
        </Menu.Item>
        <Menu.Menu className='search-input'>
          <div className='ui aligned category search item search-input'>
            <div className='ui transparent icon input'>
              <input
                className='prompt' type='text' onChange={this.searchHandleChange} // TODO: DelayInput
                placeholder='Search Here... The text you are reading is written for you to see the search bar.'
              />
              <i className='search icon' />
            </div>
            <div className='results' />
          </div>
        </Menu.Menu>
        <Menu.Item>
          <Dropdown item icon='setting' className='settings-icon' simple direction='left'>
            <Dropdown.Menu>
              <Link to={this.state.user ? this.state.user.id + '/profile' : ''}><Dropdown.Item text='Profile' /></Link>
              <Link to='/account-settings'><Dropdown.Item text='Account Settings' /></Link>
              <Dropdown.Divider />
              <Dropdown.Item icon='sign out' text='Abondon Ship' onClick={this.logout} />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Gravatar className='avatar' email={this.state.user ? this.state.user.email : ''} />
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Navbar)
