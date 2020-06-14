import React, { useState, useContext} from "react";
import { useHistory } from 'react-router-dom'
import UserContext from '../context/UserContext.js'
import Axios from 'axios'
import Error from './misc/ErrorDisplay.js'

export default () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState();


  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (event) => {
    event.preventDefault();

    try {
        const loginUser = { password, username,};
        // console.log(loginUser)
        await Axios.post("https://turnout-nova-api.herokuapp.com/users/login", loginUser);
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

  return <>

    <h2 className="form-title">Login</h2>
     <div className="form-cont">
     {error && (
        <Error message={error} clearError={() => setError(undefined)} />
      )}
     <form className="form-item" onSubmit={submit}>
        <label htmlFor="register-username">Username:<br/></label>
        <input
          id="login-username"
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          />
        <br/>
        <label htmlFor="login-password">Password:<br/></label>
        <input
          id="login-password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          />
        <br/>

        <input type="submit" value="Login" className="form-btn"/>
      </form>
  </div>
  </>
}