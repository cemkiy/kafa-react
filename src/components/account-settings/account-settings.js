import React, { Component } from 'react'
import './account-settings.css';
import { Card, Form, Input, TextArea, Button, Message } from 'semantic-ui-react'
import UserLabel from '../../components/user-label/user-label';

export default class Filter extends Component {
  render() {
    return (
      <Card className="form-card" centered>
       <Card.Content>
         <Card.Header content='Account Settings' />
         <Message>
            <Message.Header>
               Email Change Notify
            </Message.Header>
            <p>
              You need to confirm the link from the email to complete this process.
            </p>
          </Message>
         <Form className='form'>
          <Form.Field>
            <label>E-mail</label>
            <input placeholder='joe@mail.com' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
          <hr />
        <Message>
           <Message.Header>
              Password Change Notify
           </Message.Header>
           <p>
             You need to confirm the link from the email to complete this process.
           </p>
           <Message.List items={
             ['Password must be at least 8 characters',
             'Password must contain at least 1 digit']
           } />
         </Message>
        <Form className='form'>
          <Form.Field>
            <label>Change Password</label>
            <input placeholder='let me guess 12345' />
          </Form.Field>
          <Form.Field>
            <label>Change Password Again</label>
            <input placeholder='The same as the above but different from the previous one' />
          </Form.Field>
          <Button type='submit'>Change it!</Button>
        </Form>
        <hr />
      <Form className='form'>
        <Form.Field>
          <label>About Yourself</label>
          <textarea placeholder='You should write short. Sorry, but nobody reads.' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
       </Card.Content>
     </Card>
    )
  }
}
