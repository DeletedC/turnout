import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch} from 'react-router';
import { createBrowserHistory } from 'history';

import App from "./App";
import New from "./New";
import Test from "./Test";
import Show from "./Show.js"
import Dashboard from "./Dashboard";
import Login from "./login";
import Edit from "./Edit";
import Signup from "./signup";

const routes = [
    
    {
        path: "/signup",
        component: Signup,
        name: "Signup"
    },
    {
        path: "/show",
        component: Show,
        name: "Show"
    },
    {
        path: "/edit",
        component: Edit,
        name: "Edit"
    },
    {
        path: "/new",
        component: New,
        name: "Create New Event"
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard"
    },
    {
        path: "/login",
        component: Login,
        name: "Login"
    },
    {
        path: "/",
        component: App,
        name: "Home"
    }
]

const root = document.getElementById('root')
let his = createBrowserHistory();
ReactDOM.render(
    <Router history={his}>
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
    </Router>,root
)

export {
    routes
}


