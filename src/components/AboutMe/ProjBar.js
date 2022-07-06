import { Component } from "react";
import { ProgressBar } from "react-bootstrap";

class ProjBar extends Component {
    render() {
        return(
            <div className="m-2">
                <p>{this.props.title}</p>
                <ProgressBar now={this.props.level} label={`${this.props.level}%`}/> 
            </div>
        )
    }
}

export default ProjBar