import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Employee Manager"/>, document.getElementById('root'));
registerServiceWorker();
