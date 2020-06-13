
import React, {Component} from "react";
import MainNav from '../MainNav/index.js'
import LoginForm from './forms/LoginForm.js'

export default (Signup) => {
    const blankUser = {
        username: "",
        password: "",
      };

     /// / Create a new event
  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:8000/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
  };
      return (
          <div>
     <h2 className="center">Login</h2>
      <LoginForm initial={blankUser} handleSubmit={handleCreate}></LoginForm>
      </div>
      )
}