import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import MenuExampleVerticalSecondary from './components/sidebar/sidebar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MenuExampleVerticalSecondary />, document.getElementById('root'));
registerServiceWorker();
