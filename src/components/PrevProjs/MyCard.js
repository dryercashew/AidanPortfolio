import { Component } from "react";
import { Card } from "react-bootstrap" 

class MyCard extends Component {
    render () {
        return (
            <Card className="m-2" style={{width: "31%"}}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.desc}
                    </Card.Text>
                    <Card.Link href={this.props.link}>Link To Project</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default MyCard