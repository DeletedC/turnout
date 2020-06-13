import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../MainNav/style.scss'
import logo from "../imgs/logo-name.png";
import UserContext from "../context/UserContext.js"


export default (props) => {
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory()

    const signup = () => {history.push("/users/signup")}
    const login = () => {history.push("/users/login")}
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem('auth-token', '')
    }
  
        return(
            <div className="nav-cont">

            <nav className="grey darken-3 navbar-fixed">
            <a href="/">
                <img className="logo-nav brand-logo left" src={logo} alt="turnout logo"/>
            </a>
            
            <div className="btn-cont">
                {
                    userData.user? <button onClick={logout}>Logout</button> :
                    <>
                    <button onClick={login}>Log In</button>
                    <button onClick={signup}>Signup</button>
                    </>
                }
            </div>

             </nav>
            </div>
         )
}