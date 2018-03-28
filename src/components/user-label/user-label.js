import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Label, Popup, Card, Image, Icon } from 'semantic-ui-react'

export default class UserLabel extends Component {
  render() {
    return (
      <Popup
         trigger={
           <Link to='/profile'>
             <Label image>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AHJGuP0nmqfIv4Z0lWketAX7Q1KF21RXSWo2CkIOq6DSep2Y' />
               Jack
               <Label.Detail>Captain</Label.Detail>
             </Label>
           </Link>
         }
         flowing
         hoverable>
         <Card>
           <Card.Content>
             <Image floated='right' size='mini' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AHJGuP0nmqfIv4Z0lWketAX7Q1KF21RXSWo2CkIOq6DSep2Y' />
             <Card.Header>
               Jack Sparrow
             </Card.Header>
             <Card.Meta>
               User
             </Card.Meta>
             <Card.Description>
               He is a captain.
             </Card.Description>
           </Card.Content>
           <Card.Content extra>
             <a>
               <Icon name='magnet' />
               22 Torrents
             </a>
           </Card.Content>
         </Card>
       </Popup>
    )
  }
}
