import React from 'react'
import {Container, Jumbotron, Button, Card} from 'react-bootstrap'
import NavBar from './navbar'

export default class Home extends React.Component {
    render() {
        const styles = {
            heroDiv: {
            backgroundImage: "url(./images/decor-flatlay-from-above-1470171.jpg)"
            }
        }
        console.log(styles.heroDiv)
        return (
            <React.Fragment>
                <NavBar/>
                <Jumbotron className="hero-container" style={styles.heroDiv} fluid>
                    <Container className="hero-text">
                        <h1> Another one.</h1>
                        <p className="hero-para">
                        Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. 
                        </p>
                        <Button variant="primary">Lion</Button>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

// src={require("./images/4k-wallpaper-close-up-dew-807598.jpg")}