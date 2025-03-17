import React from 'react';
import { Link } from "react-router-dom";
import Header from "./Header";


function Contact(props) {
    return (
            <div className="col-md-3">
            <div className="card">
           
            <img src={props.img} className="card-img-top" style={{ width: "100%", height: "180px" }} alt="card-image" />

               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <Link to="Detail" className="btn btn-success">{props.button}</Link>
           </div>
        </div>

    );
}

export default Contact;