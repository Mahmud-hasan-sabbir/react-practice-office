import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Website.css";
import Contact from "./contact";
import Header from "./Header";

function Website() {
  const [shorttitle] = useState([
    {
      stitle1: "Lorem ipsum dolor sit of Bangladesh",
      stitle2: "Lorem ipsum dolor sit of India",
      stitle3: "Lorem ipsum dolor sit of Canada",
    },
    {
      ltitle1: "Lorem ipsum dolor sit amet, consectetaur Bangladesh",
      ltitle2: "Icon Information System Ltd. shajadpur",
      ltitle3: "Lorem ipsum dolor sit amet, consectetaur canada",
    }
  ]);

  return (
    <>
       <Header />

      <div id="carouselExampleFade" className="carousel slide carousel-fade container" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6">
                <img src="assets/2.jpg" className="d-block w-100 heightt" alt="..." />
              </div>
              <div className="col-md-6">
                <p className="ShortTitle">{shorttitle[0].stitle1}</p> {/* Removed this.state */}
                <h5 className="longtext">{shorttitle[1].ltitle1}</h5>
                <p className="ShortTitle">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <p className="text">Pellentesque habitant</p>
                <p>25-02-2025</p>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <img src="assets/3.jpg" className="d-block w-100 heightt" alt="..." />
              </div>
              <div className="col-md-6">
                <p className="ShortTitle">{shorttitle[0].stitle2}</p> {/* Removed this.state */}
                <h5 className="longtext">{shorttitle[1].ltitle1}</h5>
                <p className="ShortTitle">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <p className="text">Pellentesque habitant</p>
                <p>25-02-2025</p>
              </div>
            </div>
          </div>

         
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <img src="assets/imageone.jpg" className="d-block w-100 heightt" alt="..." />
              </div>
              <div className="col-md-6">
                <p className="ShortTitle">{shorttitle[0].stitle3}</p> {/* Removed this.state */}
                <h5 className="longtext">{shorttitle[1].ltitle3}</h5>
                <p className="ShortTitle">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <p className="text">Pellentesque habitant</p>
                <p>25-02-2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <div className="container">
      <h3 className="recentpost">Recent Post</h3>
        <div className="row">
            <Contact img="assets/2.jpg" title="card one" button="overall"></Contact>
            <Contact img="assets/3.jpg" title="card two" button="view"></Contact>
            <Contact img="assets/imageone.jpg" title="card three" button="Show"></Contact>
            <Contact img="assets/imageone.jpg" title="card four" button="Detail"></Contact>
        </div>
      </div>
      

    
     

    
    </>
  );
}

export default Website;
