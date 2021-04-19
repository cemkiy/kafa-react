import React, { Component } from 'react'
import './navbar.css'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Label, Dropdown, Icon } from 'semantic-ui-react'

export class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleSearchChange = (event, data) => {
    this.props.history.push({
      pathname: '/browse',
      search: '?name=' + event.target.value
    })
  }

  handleLogout = () => {
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
                className='prompt' type='text' onChange={this.handleSearchChange} // TODO: DelayInput
                placeholder='Search Here... The text you are reading is written for you to see the search bar.'
              />
              <Icon name='search' />
            </div>
            <div className='results' />
          </div>
        </Menu.Menu>
        <Menu.Item>
          <Dropdown item icon='setting' className='settings-icon' simple direction='left'>
            <Dropdown.Menu>
              <Link to='/browse'><Dropdown.Item text='Dark Mode(in progress)' /></Link>
              <Dropdown.Divider />
              <Dropdown.Item icon='sign out' text='Abondon Ship' onClick={this.handleLogout} />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(Navbar)
