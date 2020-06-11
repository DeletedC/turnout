import React from 'react'
import { Link } from 'react-router-dom';
import {routes} from '../index';

class MainNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            routes: routes
        }
    }
    render(){
        return(
            <nav>
                <ul>
                    {
                        this.state.routes.map((route, index)=>{
                           return (
                            <li  className="" key={index}><Link to={route.path}>{route.name}</Link></li>
                            )
                         })
                     }
                 </ul>
             </nav>
         )
     }
 }
 export default MainNav;