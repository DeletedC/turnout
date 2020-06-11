import React, {Component} from 'react'
import MainNav from '../MainNav'

class Test extends Component {
    render(){
        return(
            <div>
                <MainNav></MainNav>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}

export default Test;