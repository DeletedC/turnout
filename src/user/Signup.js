import React, { useState, useContext} from "react";
import { useHistory } from 'react-router-dom'
import UserContext from '../context/UserContext.js'
import Axios from 'axios'
import Error from './misc/ErrorDisplay.js'

export default (Signup) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [username, setUsername] = useState();
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (event) => {
    event.preventDefault();

    try {
        const newUser = { email, password, passwordCheck, username, firstName, lastName };
        console.log(newUser)
        await Axios.post("http://localhost:8000/users/signup", newUser);
        const loginRes = await Axios.post("http://localhost:8000/users/login", {
        username,
        password,
        });
        setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/");
    } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
    }
    };

      return (
            <div>
     <h2 className="center">Signup</h2>
     <div className="form-cont">
     {error && (
        <Error message={error} clearError={() => setError(undefined)} />
      )}
     <form className="form-cont" onSubmit={submit}>
        <label htmlFor="register-username">Username</label>
        <input
          id="register-username"
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          />


        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          />


        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(event) => setPasswordCheck(event.target.value)}
          />


        <label htmlFor="register-first-name">First Name</label>
        <input type="text"
               onChange={(event) => setFirstName(event.target.value)} 
        />

        <label htmlFor="register-last-name">Last Name</label>
        <input id="register-last-name" type="text"
               onChange={(event) => setLastName(event.target.value)} 
        />




        <input type="submit" value="Signup" />
      </form>
            </div>

      {/* <SignupForm initial={blankUser} handleSubmit={handleCreate}></SignupForm> */}
      </div>
      )
}