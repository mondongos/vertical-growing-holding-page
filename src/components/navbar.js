import React from 'react'
import {Navbar} from 'react-bootstrap'

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark">
            <Navbar.Brand href="#home">
             <div className="nav-text">Hals</div>
            </Navbar.Brand>
          </Navbar>
        )
    }
}