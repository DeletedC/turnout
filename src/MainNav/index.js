import React, { useContext } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom';
import '../MainNav/style.scss'
import logo from "../imgs/logo-name.png";
import UserContext from "../context/UserContext.js"


export default (props) => {
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory()

    const createNew = () => {history.push("/new")}
    const account = () => {history.push("/users/account")}
    const signup = () => {history.push("/users/signup")}
    const login = () => {history.push("/users/login")}
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem('auth-token', '')
        history.push("/")
    }
  
        return(
            <div className="nav-cont">

            <nav className="grey darken-3 navbar-fixed">
            <a href="/">
                <img className="logo-img" src={logo} alt="turnout logo"/>
            </a>
            
            <div className="btn-function">
                {
                    userData.user? 
                        <div className="buttons">
                        <button className="acct-btns" onClick={logout}>Logout</button>
                        <button className="acct-btns" onClick={createNew}>New Event</button>
                        <button className="acct-btns" onClick={account}>Account</button>
                        </div> :
                    <div className="buttons">
                    <button className="acct-btns" onClick={login}>Log In</button>
                    <button className="acct-btns" onClick={signup}>Signup</button>
                    </div>
                }
            </div>

             </nav>
            </div>
            
         )
}