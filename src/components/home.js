import React from 'react'
import {Container, Jumbotron, Button, Card, InputGroup, FormControl} from 'react-bootstrap'
import NavBar from './navbar'

export default class Home extends React.Component {
    render() {
        const styles = {
            heroDiv: {
            backgroundImage: 'url(./images/decor-flatlay-from-above-1470171.jpg)'
            }
        }
        console.log(styles.heroDiv)
        return (
            <React.Fragment>
                <NavBar/>
                <Jumbotron className="hero-container hero-background-image"  fluid>
                    <Container className="hero-text">
                        <h1> Another one.</h1>
                        <p className="hero-para">
                        Watch your back, but more importantly when you get out the shower, dry your back, it’s a cold world out there. 
                        </p>
                        <Button variant="primary">Lion</Button>
                    </Container>
                </Jumbotron>
                <Card className="contact-form">
                    <Card.Body>
                        <h3>We're not quite ready yet.</h3>
                        <p>Give us your email and we'll alert you when we're live.</p>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    </Card.Body>

                </Card>
            </React.Fragment>
        )
    }
}

// src={require("./images/4k-wallpaper-close-up-dew-807598.jpg")}