import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import Browse from './components/browse/browse';
import Detail from './components/detail/detail';
import Profile from './components/profile/profile';
import AccountSettings from './components/account-settings/account-settings';
import Deck from './components/deck/deck';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
ReactDOM.render(<Deck />, document.getElementById('main'));
registerServiceWorker();
