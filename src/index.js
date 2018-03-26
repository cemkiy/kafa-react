import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import Browse from './components/browse/browse';
import Detail from './components/detail/detail';
import Profile from './components/profile/profile';
import AccountSettings from './components/account-settings/account-settings';
import Deck from './components/deck/deck';
import Share from './components/share/share';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar isBarPage={true} />, document.getElementById('navbar'));
ReactDOM.render(<Sidebar isBarPage={true} />, document.getElementById('sidebar'));

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Deck}/>
      <Route path='/browse' component={Browse}/>
      <Route path='/detail' component={Detail}/>
      <Route path='/profile' component={Profile}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('main'))

registerServiceWorker();
