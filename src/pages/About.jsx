import React, { Component } from "react";
import Header from "./Header";

class About extends Component {
    constructor(props) {  
        super(props);
        this.state = {
            name: "Sabbir",
            year: 34,
            prof: {
                title1: "Software Engineer",
                title2: "Web Developer",
                title3: "React Developer",
            }
        };
    }

    // Correctly defined method
    changeValue () {
        this.setState ({
            prof: {
                // Keep existing properties
                title1: "React Developer",
                title2: "Frontend Developer",
                title3: "Full Stack Developer"
            }
        });
    }

    render() {  
        return (
            <>
             <Header />
                <h1>My name is {this.state.name}, I'm a {this.state.prof.title1}, and I work as a {this.state.prof.title2}.</h1>
                <button 
                    onClick={this.changeValue.bind(this)}

                    style={{ border: "1px solid black", padding: "5px" }}
                >
                    Change a Value
                </button>
            </>
        );
    }
}

export default About;
