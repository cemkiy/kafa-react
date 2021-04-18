import React, { Component } from 'react'
import './filter.css'
import { Icon } from 'semantic-ui-react'

export default class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filter: []
    }
  }

  filterHandleChange = (event, data) => {
    const mockFilterData = this.state.filter
    if (mockFilterData.indexOf(event.target.name) > -1) {
      mockFilterData.splice(mockFilterData.indexOf(event.target.name), 1)
      this.setState({ filter: mockFilterData }, () => {
        this.props.onChange(this.state.filter) // trigger parent page
      })
    } else {
      mockFilterData.push(event.target.name)
      this.setState({ filter: mockFilterData }, () => {
        this.props.onChange(this.state.filter) // trigger parent page
      })
    }
  }

  render () {
    return (
      <div className='checkboxGroup'>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='musics' onChange={this.filterHandleChange} />
          <div className='state'>
            <Icon name='music' />
            <label>Musics</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='applications' onChange={this.filterHandleChange} />
          <div className='state'>
            <Icon name='bug' />
            <label>Applications</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='movies' onChange={this.filterHandleChange} />
          <div className='state'>
            <Icon name='film' />
            <label>Movies</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='tv/shows' onChange={this.filterHandleChange} />
          <div className='state'>
            <Icon name='tv' />
            <label>TV/Shows</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='games' onChange={this.filterHandleChange} />
          <div className='state'>
            <Icon name='game' />
            <label>Games</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='documents' onChange={this.filterHandleChange} />
          <div className='state'>
            <Icon name='spy' />
            <label>Documents</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='xxx' onChange={this.filterHandleChange} />
          <div className='state'>
            <Icon name='heart' color='red' />
            <label>XXX</label>
          </div>
        </div>
      </div>
    )
  }
}
