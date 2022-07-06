import { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import { Link } from "react-router-dom";
import csv from "../Files/ResumeUpdated.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <MDBFooter color="black" className="text-center text-lg-left" >
                <MDBContainer fluid className="p-4 mt-4 container" >
                    <MDBRow style={{margin : "auto"}}>
                        <MDBCol md="4" className='mb-4 mb-md-0'>
                            <h3>Aidan Spelman</h3>
                            <p>Refer to any of the links or contact methods to reach out to me.</p>
                        </MDBCol>
                        <MDBCol md="4" className='mb-4 mb-md-0'>
                            <h4 className="title">Links:</h4>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href="https://github.com/dryercashew" target="_blank">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/aidan-spelman-8a286519a/" target="_blank">LinkedIn</a>
                                </li>
                                <li>
                                    <a href={csv} target="_blank">CSV</a>
                                </li>
                            </ul>                 
                        </MDBCol>
                        <MDBCol md="4">
                            <h4>Contact: </h4>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    Email: <a>aidanspel@hotmail.com</a>
                                </li>
                                <li>
                                    Discord: <a>dryercashew#5683</a>
                                </li>
                                <li>
                                    Instagram: <a>aidanspel</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="text-center">
                    <a href="https://github.com/dryercashew"
                        className="youtube social" style={{padding: "8px"}}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100005008487946"
                        className="facebook social" style={{padding: "8px"}}>
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.twitter.com/aidanspel" className="twitter social" style={{padding: "8px"}}>
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/aidanspel"
                        className="instagram social" style={{padding: "8px"}}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()}{' '}
                    <a className='text-white' href='https://mdbootstrap.com/'>
                    Aidan Spelman
                    </a>
                </div>
                
            </MDBFooter>
        )
    }
}

export default Footer