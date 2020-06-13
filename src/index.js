import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Switch} from 'react-router';
import { createBrowserHistory } from 'history';

import App from "./App";
import New from "./New";
import Edit from "./Edit";
import Test from "./Test";
import Show from "./Show.js"

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


