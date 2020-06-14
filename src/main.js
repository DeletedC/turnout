import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Axios from 'axios'

import Home from "./App";
import New from "./New";
import Edit from "./Edit";
import Test from "./Test";
import Show from "./Show.js"
import Account from "./user/Account.js";
import Signup from "./user/Signup.js";
import Login from "./user/Login.js"
import MainNav from './MainNav/index.js'

import UserContext from './context/UserContext.js'

const routes = [
    
    {
        path: "/show",
        component: Show,
        name: "Show"
    },
    {
        path: "/new",
        component: New,
        name: "Create New Event"
    },
    {
        path: "/edit",
        component: Edit,
        name: "Edit"
    },
    {
        path: "/users/account",
        component: Account,
        name: "Account"
    },
    {
        path: "/users/login",
        component: Login,
        name: "Login"
    },
    {
        path: "/users/signup",
        component: Signup,
        name: "Signup"
    },
    {
        path: "/",
        component: Home,
        name: "Home"
    },
]

// let his = createBrowserHistory();

export default () => {

    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    })
    
    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem("auth-token")
            if (token === null){
                localStorage.setItem("auth-token", '')
                // token = ''
            }
            const tokenResponse = await Axios.post('https://turnout-nova-api.herokuapp.com/users/tokenisvalid', null, {
                headers: {"x-auth-token": token} } 
            )
            if (tokenResponse.data){
                const userRespone = await Axios.get('https://turnout-nova-api.herokuapp.com/users', {
                    headers: {'x-auth-token': token},
                })
                setUserData({
                    token,
                    user: userRespone.data
                })
            }
        }
        checkLoggedIn()
    },[])

    return (
        <>
        <BrowserRouter>
        <UserContext.Provider value={{userData, setUserData}}>
        <MainNav />
        <Switch>
            <Route path={'/test/:id'} component={Test}></Route>
            {
                routes.map((route)=>{
                    return (
                        <Route path={route.path}
                        component={route.component}
                        key={route.name}></Route>
                        )
                    })
                }
        </Switch>

        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}

export {
    routes
}


