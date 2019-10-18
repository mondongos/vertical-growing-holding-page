import React from 'react'
import {Container, Jumbotron} from 'react-bootstrap'
import NavBar from './navbar'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Jumbotron className="hero-container" fluid>
                    <Container className="hero-text">
                        <h1> Another one</h1>
                        <p>
                        Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. 
                        </p>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}