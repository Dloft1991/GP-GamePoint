import React from 'react';
import logo from './GP Game Point Logo 2.0 Square.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
          <div class="col-sm-6">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div class="col-sm-6">
          <ul>
          <li>About</li>
          <li>Contact</li>
          <li>login/Sign up</li>
        </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
