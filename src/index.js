import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import { BrowserRouter } from 'react-router-dom'


ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));