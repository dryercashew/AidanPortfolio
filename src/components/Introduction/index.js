import { Component } from "react";
import "./intro.scss"
import profile from "../Images/profilePicResize.jpg"
import {Image, Button} from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

class Introduction extends Component {
    render() {
        return (
            <div className="backPhoto">
                <div className="show-items">
                    <Image className="profilePic" src={profile} alt="No Picture Found" roundedCircle />
                    <h1>Aidan Thomas Spelman</h1>
                    <h5>Software Development Engineer @ Amazon AWS</h5>
                    <Button variant="outline-light">Contact Me</Button>
                    <div className="mt-4">
                        <a href="https://github.com/dryercashew"
                            className="youtube social">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100005008487946"
                            className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.twitter.com/aidanspel" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/aidanspel"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Introduction