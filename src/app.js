import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Deck from './components/deck/deck';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import Browse from './components/browse/browse';
import Detail from './components/detail/detail';
import Profile from './components/profile/profile';
import AccountSettings from './components/account-settings/account-settings';
import Share from './components/share/share';

const RouteMap = () => (
  <div>
    <nav id='navbar'><Navbar /></nav>
    <section id='sidebar'><Sidebar /></section>
    <main id='main'>
      <Switch>
        <Route path='/browse' component={Browse}/>
        <Route path='/detail' component={Detail}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/account-settings' component={AccountSettings}/>
        <Route path='/share' component={Share}/>
      </Switch>
    </main>
  </div>
)

const App = () => (
    <Switch>
      <Route exact path='/' component={Deck} />
      <Route path='/' component={RouteMap} />
    </Switch>
)

export default App
