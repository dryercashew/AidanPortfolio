import { Component } from "react";
import sideImg from "../Images/photoSide.jpg"
import "./about.scss"
import ProjBar from "./ProjBar";
import skills from "./Skills"

const mySkills = skills.map(item => <ProjBar level={item.level} title={item.title}/>)

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutDiv container p-4">
                <div className="m-4 text-right">
                    <h2>Who I Am</h2>
                    <h5>Hello, I'm Aidan Spelman, a computer programmer around the Seattle, WA area who is an incoming SDE at Amazon. I have a Bachelors in Computer Science with a Minor in Mathematics. Feel free to reach out to me or take a look at some of my previous work! </h5>
                </div>
                <div className="m-4">
                    <img src={sideImg} alt="No Image foudn"></img>
                </div>
                <div className="text-left">
                    <h3>My Skills</h3>
                    {mySkills}
                </div>
                
            </div>
        )
    }
}

export default AboutMe