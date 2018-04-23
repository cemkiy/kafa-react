import React, { Component } from 'react'
import './user-label.css';
import { Link } from 'react-router-dom'
import { Label, Popup, Card, Icon } from 'semantic-ui-react'
import Gravatar from 'react-gravatar'

export default class UserLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
      role: localStorage.getItem('role')
    }
  }

  render() {
    return (
      <Popup
         className='popup-wide'
         trigger={
           <Link to='/profile'>
             <Label image>
               <Gravatar email={this.state.user.email} />
               {this.state.user.username}
               <Label.Detail>{this.state.role}</Label.Detail>
             </Label>
           </Link>
         }
         flowing
         hoverable>
         <Card>
            <Gravatar email={this.state.user.email} size={290}/>
           <Card.Content>

             <Card.Header>
               {this.state.user.username}
             </Card.Header>
             <Card.Meta>
               {this.state.role}
             </Card.Meta>
             <Card.Description>
               {this.state.user.about}
             </Card.Description>
           </Card.Content>
           <Card.Content extra>
             <a>
               <Icon name='magnet' />
               ? Torrents
             </a>
           </Card.Content>
         </Card>
       </Popup>
    )
  }
}
