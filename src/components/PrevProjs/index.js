import { Component } from "react";
import MyCard from "./MyCard" 
import data from "./Data"
import "./projs.scss"

const myMap = data.map(item => <MyCard title={item.title} link={item.link} desc={item.desc} img={item.img} />)

class PrevProjs extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center m-4">MY PREVIOUS PROJECTS</h2>
                <div className="prev-projects-container">
                    {myMap}
                </div>
            </div>
        )
    }
}

export default PrevProjs