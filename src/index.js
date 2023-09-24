import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS file if you have one
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Import your main application component

ReactDOM.render(
  <Router>
    <App /> {/* Render your main application component */}
  </Router>,
  document.getElementById('root')
);
