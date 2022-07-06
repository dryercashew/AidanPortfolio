import { Component } from "react";
import { Chrono } from "react-chrono";
import data from "./Data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Timeline extends Component {
    render() {
        return(
            <div className="container text-center mt-4">
                <h2>TIMELINE</h2>
                <div style={{ width: "500px", height: "950px", margin: "auto" }}>
                    <Chrono
                    items={data} 
                    mode="VERTICAL_ALTERNATING"
                    scrollable
                    theme={{ primary: "black", secondary: "grey" }}
                    >
                        <div className="chrono-icons">
                            
                        </div>
                    </Chrono>
                </div>
            </div>
            
        )
    }
}

export default Timeline