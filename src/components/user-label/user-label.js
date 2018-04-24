import React, { Component } from 'react'
import './user-label.css';
import { Link } from 'react-router-dom'
import { Label, Popup } from 'semantic-ui-react'
import { UserById } from '../../api/user';
import UserCard from '../../components/user-card/user-card.js';
import Gravatar from 'react-gravatar'
import { ErrorAnalysis } from '../../middleware/error-handler';

export default class UserLabel extends Component {
  constructor(props) {
    super(props);
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
               <Label.Detail>{this.props.user.role.type}</Label.Detail>
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
