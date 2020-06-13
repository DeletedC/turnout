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
            <nav>
                <ul className="navbar">
                    {
                        this.state.routes.map((route, index)=>{
                           return (
                            <li  className="list-items" key={index}><Link to={route.path}>{route.name}</Link></li>
                            )
                         })
                     }
                 </ul>
             </nav>
            
         )
}