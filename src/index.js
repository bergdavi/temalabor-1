import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import axios from 'axios';

window.axios = axios;
ReactDOM.render(<App />, document.getElementById('root'));

