import React from 'react';
import './Create.css'

function Create() {
    return (
      <div className="CreateAccount">
          <p className="createTitle">Create Account </p>
        <input id="input1" type="FirstName" placeholder="First Name"></input>
        <input id="input2" type="LastName" placeholder="Last Name"></input>
        <input id="input3" type="PhoneNumber" placeholder="Phone Number"></input>
        <input id="input3" type="Email" placeholder="Email"></input>
        <input id="input4" type="username" placeholder="Username"></input>
        <input id="input5" type="password" placeholder="Password"></input>
        <button className="CreateAccountButton" onClick={CreateAccount}>Create Account</button>
      </div>
    );
  }
  function CreateAccount() {
    alert("Account Created");
    
  }
   
  export default Create;