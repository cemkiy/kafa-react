import React, { Component } from 'react'
import './browse.css';
import { Checkbox, Icon } from 'semantic-ui-react'

export default class Browse extends Component {
  render() {
    return (
      <div className="checkboxGroup">
        <div class="pretty p-icon p-curve p-tada p-plain">
          <input type="checkbox" className="checkbox-style"/>
          <div class="state">
              <Icon name='music' color="green" />
              <label>Music</label>
          </div>
        </div>
        <div class="pretty p-icon p-curve p-tada p-plain">
          <input type="checkbox" />
          <div class="state">
              <Icon name='bug' color="brown" />
              <label>Applications</label>
          </div>
        </div>
        <div class="pretty p-icon p-curve p-tada p-plain">
          <input type="checkbox" />
          <div class="state">
              <Icon name='film' color="olive" />
              <label>Movies</label>
          </div>
        </div>
        <div class="pretty p-icon p-curve p-tada p-plain">
          <input type="checkbox" />
          <div class="state">
              <Icon name='tv' color="purple" />
              <label>TV/Shows</label>
          </div>
        </div>
        <div class="pretty p-icon p-curve p-tada p-plain">
          <input type="checkbox" />
          <div class="state">
              <Icon name='game' color="teal" />
              <label>Games</label>
          </div>
        </div>
        <div class="pretty p-icon p-curve p-tada p-plain">
          <input type="checkbox" />
          <div class="state">
              <Icon name='spy' color="black" />
              <label>Documents</label>
          </div>
        </div>
        <div class="pretty p-icon p-curve p-tada p-plain">
          <input type="checkbox" />
          <div class="state">
              <Icon name='image' color="yellow" />
              <label>Pictures</label>
          </div>
        </div>
        <div class="pretty p-icon p-curve p-tada p-plain">
          <input type="checkbox" />
          <div class="state">
              <Icon name='like' color="red" />
              <label>X</label>
          </div>
        </div>
      </div>
    )
  }
}
