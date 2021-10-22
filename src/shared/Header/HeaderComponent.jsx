import React, { Component } from 'react'

class HeaderComponent extends Component {
    constractor(){
      
    }
    render(){
        return(<React.Fragment>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div>
                       <a href="aa" className="navbar-brand">Employee Managemant Application</a>
                   </div>
                </nav>
            </header>
        </React.Fragment>)
    }
}

export default HeaderComponent