import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"

import "./style.scss"

class Navigation extends Component {
    render() {
        return(
            <div>
                <Navbar expand="sm" fixed="top" bg="black" variant="white" className="my-navbar">
                    <Container className="nav-container">
                        <Nav>
                            <Navbar.Brand className="name">Aidan Spelman</Navbar.Brand>
                        </Nav>
                        <Nav>   
                            <Nav.Link className="nav-link">HOME</Nav.Link>
                            <Nav.Link className="nav-link">ABOUT ME</Nav.Link>
                            <Nav.Link className="nav-link">CONTACT</Nav.Link> 
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Navigation