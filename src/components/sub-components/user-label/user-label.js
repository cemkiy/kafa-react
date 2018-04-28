import React, { Component } from 'react'
import './user-label.css';
import { Link } from 'react-router-dom'
import { Label, Popup } from 'semantic-ui-react'
import UserCard from '../../../components/sub-components/user-card/user-card';
import Gravatar from 'react-gravatar'

export default class UserLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Popup
         className='popup-wide'
         trigger={
           <Link to={this.props.user.id + '/profile'}>
             <Label image>
               <Gravatar email={this.props.user.email} />
               {this.props.user.username}
               <Label.Detail>{this.props.user.role ? this.props.user.role.type : ''}</Label.Detail>
             </Label>
           </Link>
         }
         flowing
         hoverable>
         <UserCard user={this.props.user} />
       </Popup>
    )
  }
}
