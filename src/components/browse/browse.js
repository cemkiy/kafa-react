import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './browse.css';
import satellite from '../../assets/img/satellite.gif';
import { Icon, Table, Button, Image, Pagination } from 'semantic-ui-react'
import UserLabel from '../../components/user-label/user-label';
import Filter from '../../components/filter/filter';

export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.goToDetail = this.goToDetail.bind(this);
  }

  goToDetail(event, data) {
    this.props.history.push("/detail");
  }

  render() {
    return (
      <div>
         <Filter />
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
                         <UserLabel />
                         <Link to='/detail' className='link'> Battlefield x</Link>
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
