import { Component } from "react";
import Introduction from "../Introduction";
import Navigation from "../Navigation";
import Footer from "../Footer"
import AboutMe from "../AboutMe";
import PrevProjs from "../PrevProjs";
import Timeline from "../Timeline";

class Landing extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Introduction />
                <AboutMe />
                <PrevProjs />
                <Timeline />
                <Footer /> 
            </div>
        )
    }
}

export default Landing