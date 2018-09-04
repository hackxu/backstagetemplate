import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLocale from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppLocale/>, document.getElementById('root'));
registerServiceWorker();
