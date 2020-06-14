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
        // console.log(newUser)
        await Axios.post("https://turnout-nova-api.herokuapp.com/users/signup", newUser);
        const loginRes = await Axios.post("https://turnout-nova-api.herokuapp.com/users/login", {
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
     <h2 className="form-title">Signup</h2>
     <div className="form-cont">
     {error && (
        <Error message={error} clearError={() => setError(undefined)} />
      )}
     <form className="form-item" onSubmit={submit}>
        <label htmlFor="register-username">Username</label>
        <br/>
        <input
          id="register-username"
          type="text"
          className="signup-sctn"
          onChange={(event) => setUsername(event.target.value)}
          />
        <br/>

        <label htmlFor="register-email">Email</label>
        <br/>
        <input
          id="register-email"
          type="email"
          className="signup-sctn"
          onChange={(event) => setEmail(event.target.value)}
          />
        <br/>

        <label htmlFor="register-password">Password</label>
        <br/>
        <input
          id="register-password"
          type="password"
          className="signup-sctn"
          onChange={(event) => setPassword(event.target.value)}
          />
        <br/>
        <input
          type="password"
          className="signup-sctn"
          placeholder="confirm password"
          onChange={(event) => setPasswordCheck(event.target.value)}
          />
        <br/>

        <label htmlFor="register-first-name">First Name</label>
        <br/>
        <input type="text"
               className="signup-sctn"
               onChange={(event) => setFirstName(event.target.value)} 
        />
        <br/>
        <label htmlFor="register-last-name">Last Name</label>
        <br/>
        <input id="register-last-name" type="text"
               className="signup-sctn"
               onChange={(event) => setLastName(event.target.value)} 
        />
        <br/>



        <input type="submit" value="Signup" className="form-btn"/>
      </form>
            </div>

      {/* <SignupForm initial={blankUser} handleSubmit={handleCreate}></SignupForm> */}
      </div>
      )
}