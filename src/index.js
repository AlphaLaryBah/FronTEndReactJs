import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

