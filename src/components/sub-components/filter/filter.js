import React, {Component} from 'react'
import './filter.css'
import {Icon} from 'semantic-ui-react'

export default class Filter extends Component {
  render () {
    return (<div className='checkboxGroup'>
      <div className='pretty p-icon p-curve p-tada p-plain'>
        <input type='checkbox' className='checkbox-style' />
        <div className='state'>
          <Icon name='music' />
          <label>Music</label>
        </div>
      </div>
      <div className='pretty p-icon p-curve p-tada p-plain'>
        <input type='checkbox' />
        <div className='state'>
          <Icon name='bug' />
          <label>Applications</label>
        </div>
      </div>
      <div className='pretty p-icon p-curve p-tada p-plain'>
        <input type='checkbox' />
        <div className='state'>
          <Icon name='film' />
          <label>Movies</label>
        </div>
      </div>
      <div className='pretty p-icon p-curve p-tada p-plain'>
        <input type='checkbox' />
        <div className='state'>
          <Icon name='tv' />
          <label>TV/Shows</label>
        </div>
      </div>
      <div className='pretty p-icon p-curve p-tada p-plain'>
        <input type='checkbox' />
        <div className='state'>
          <Icon name='game' />
          <label>Games</label>
        </div>
      </div>
      <div className='pretty p-icon p-curve p-tada p-plain'>
        <input type='checkbox' />
        <div className='state'>
          <Icon name='spy' />
          <label>Documents</label>
        </div>
      </div>
      <div className='pretty p-icon p-curve p-tada p-plain'>
        <input type='checkbox' />
        <div className='state'>
          <Icon name='heart' color='red' />
          <label>XXX</label>
        </div>
      </div>
    </div>)
  }
}
