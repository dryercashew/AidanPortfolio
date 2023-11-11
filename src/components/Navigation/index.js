import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"

import "./style.scss"

class Navigation extends Component {

    constructor(props) {
        super(props);
        
        this.defaultColor = '#222'
        this.defaultText = '#fff'

        this.state = {
            navBackground: this.defaultColor,
            textColor: this.defaultText
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollPosition = window.scrollY;
        const headerHeight = 50; // Adjust this value based on your header's height
    
         // Change to your desired background color
        if (scrollPosition > headerHeight) {
            this.setState({ 
                navBackground: '#fff',
                textColor: '#000' 
            });
        } else {
            this.setState({ 
                navBackground: this.defaultColor,
                textColor: this.defaultText 
            });
        }
    }

    render() {
        const { navBackground, textColor } = this.state;

        return(
            <div>
                <Navbar expand="sm" fixed="top" className="my-navbar" style={{ backgroundColor: navBackground }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="nav-container" id="basic-navbar-nav">
                        <Container className="nav-container">
                            <Nav>
                                <Navbar.Brand className="name" style={{ color: textColor }}>Aidan Spelman</Navbar.Brand>
                            </Nav>
                            <Nav>   
                                <Nav.Link className="nav-link" style={{ color: textColor }}>HOME</Nav.Link>
                                <Nav.Link className="nav-link" style={{ color: textColor }}>ABOUT ME</Nav.Link>
                                <Nav.Link className="nav-link" style={{ color: textColor }}>CONTACT</Nav.Link> 
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation