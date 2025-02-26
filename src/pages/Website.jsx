import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Website.css";

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
      <Navbar expand="lg" style={{ backgroundColor: "skyblue" }}>
        <Container>
          <Navbar.Brand href="#" style={{ color: "black", fontWeight: "bold" }}>
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#">Gallery</Nav.Link> {/* Fixed Spelling */}
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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

          {/* Third Slide */}
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
    </>
  );
}

export default Website;
