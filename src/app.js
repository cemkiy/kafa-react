import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Deck from './components/pages/deck/deck';
import Sidebar from './components/templates/sidebar/sidebar';
import Navbar from './components/templates/navbar/navbar';
import Browse from './components/pages/browse/browse';
import Detail from './components/pages/detail/detail';
import Profile from './components/pages/profile/profile';
import AccountSettings from './components/pages/account-settings/account-settings';
import Share from './components/pages/share/share';
import Verify from './components/pages/verify/verify';

const RouteMap = () => (
  <div>
    <nav id='navbar'><Navbar /></nav>
    <section id='sidebar'><Sidebar /></section>
    <main id='main'>
      <Switch>
        <Route path='/browse' component={Browse}/>
        <Route path='/detail' component={Detail}/>
        <Route path='/:userId/profile' component={Profile}/>
        <Route path='/account-settings' component={AccountSettings}/>
        <Route path='/share' component={Share}/>
      </Switch>
    </main>
  </div>
)

const App = () => (
    <Switch>
      <Route exact path='/' component={Deck} />
      <Route path='/verify' component={Verify}/>
      <Route path='/' component={RouteMap} />
    </Switch>
)

export default App
