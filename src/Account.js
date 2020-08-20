import React from 'react';
import './Account.css'
// import $ from "jquery"

function Account() {
    return (
      <div id="Account" className="Account">
        <p className="loginTitle">Log in </p>
        <input id="input" type="username" placeholder="Username"></input>
        <input id="inputTwo" type="password" placeholder="Password"></input>
      </div>
    );
  }

  export default Account;