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

  handleFilterChange = (event, data) => {
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
          <input type='checkbox' name='smile' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='smile' />
            <label>comedy</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='flask' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='flask' />
            <label>sci-fi</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='eye slash' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='eye slash' />
            <label>horror</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='heart' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='heart' color='red' />
            <label>romance</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='crosshairs' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='crosshairs' />
            <label>action</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='stopwatch' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='stopwatch' />
            <label>thriller</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='tint' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='tint' />
            <label>drama</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='moon' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='moon' />
            <label>mystery</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='spy' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='spy' />
            <label>crime</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='paint brush' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='paint brush' />
            <label>animation</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='map signs' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='map signs' />
            <label>adventure</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='magic' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='magic' />
            <label>fantasy</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='heterosexual' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='heterosexual' />
            <label>comedy-romance</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='bomb' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='bomb' />
            <label>action-comedy</label>
          </div>
        </div>
        <div className='pretty p-icon p-curve p-tada p-plain'>
          <input type='checkbox' name='shield alternate' onChange={this.handleFilterChange} />
          <div className='state'>
            <Icon name='shield alternate' />
            <label>superhero</label>
          </div>
        </div>
      </div>
    )
  }
}
