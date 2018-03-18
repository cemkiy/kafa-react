import React, { Component } from 'react'
import './browse.css';
import satellite from '../../assets/img/satellite.gif';
import { Checkbox, Icon, Table, Label, Menu, Button, Image,
  Pagination, Popup, Card } from 'semantic-ui-react'

export default class Browse extends Component {
  render() {
    return (
      <div>
         <div className='checkboxGroup'>
            <div className='pretty p-icon p-curve p-tada p-plain'>
               <input type='checkbox' className='checkbox-style'/>
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
                  <Icon name='image' />
                  <label>Pictures</label>
               </div>
            </div>
            <div className='pretty p-icon p-curve p-tada p-plain'>
               <input type='checkbox' />
               <div className='state'>
                  <Icon name='like' color='red' />
                  <label>XXX</label>
               </div>
            </div>
         </div>
         <div className='torrent-table'>
            <Table celled>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell><Icon name='paw' />Name</Table.HeaderCell>
                     <Table.HeaderCell><Icon name='file' />Size</Table.HeaderCell>
                     <Table.HeaderCell>
                      <Image src={satellite} avatar />
                      Leechs/Seeds
                     </Table.HeaderCell>
                     <Table.HeaderCell><Icon name='tag' />Tag</Table.HeaderCell>
                     <Table.HeaderCell><Icon name='hand spock' />Kafa</Table.HeaderCell>
                     <Table.HeaderCell><Icon name='download' />Download</Table.HeaderCell>
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  <Table.Row>
                     <Table.Cell>
                        <Label ribbon className='torrent-name'>Battlefield x</Label><br />
                        <Popup
                           trigger={
                             <Label as='a' color='yellow' image>
                               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AHJGuP0nmqfIv4Z0lWketAX7Q1KF21RXSWo2CkIOq6DSep2Y' />
                               CaptainJack
                               <Label.Detail>User</Label.Detail>
                             </Label>
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
                     </Table.Cell>
                     <Table.Cell>14 GB</Table.Cell>
                     <Table.Cell><Icon name='long arrow down' />78/800<Icon name='long arrow up' /></Table.Cell>
                     <Table.Cell>Game/Action</Table.Cell>
                     <Table.Cell>564</Table.Cell>
                     <Table.Cell>
                      <Button.Group>
                        <Button><Icon name='save' /></Button>
                        <Button.Or />
                        <Button><Icon name='magnet' /></Button>
                      </Button.Group>
                     </Table.Cell>
                  </Table.Row>
               </Table.Body>
            </Table>
            <div className='paginator'>
              <Pagination defaultActivePage={5} totalPages={10} />
            </div>
         </div>
      </div>
    )
  }
}
