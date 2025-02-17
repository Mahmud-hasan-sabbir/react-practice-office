import React, { Component } from "react";

class About extends Component {
    constructor(props) {  
        super(props);
        this.state = {
            name: "Sabbir",
            year: 34
        };
    }

    render() {  
        return (
            <div>
                <h1>My name is  {this.state.name}  im    {this.state.year}  years old</h1>
            </div>
        );
    }
}

export default About;
