import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import Browse from './components/browse/browse';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
ReactDOM.render(<Browse />, document.getElementById('main'));
registerServiceWorker();
