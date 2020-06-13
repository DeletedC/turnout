import React, {Component} from "react";
import SignupForm from './forms/SignupForm.js'

export default (Signup) => {
    const blankUser = {
        username: "",
        password: "",
        passwordCheck: "",
        email: "",
        firstName: "",
        lastName: ""
      };


     /// / Create a new event
  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:8000/users/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
  };
      return (
          <div>
     <h2 className="center">Register</h2>
      <SignupForm initial={blankUser} handleSubmit={handleCreate}></SignupForm>
      </div>
      )
}