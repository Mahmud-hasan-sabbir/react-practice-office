import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Website.css";




function Website() {
  return (
    <>
    <Navbar expand="lg" style={{ backgroundColor: "skyblue" }}>
      <Container>
        <Navbar.Brand href="#" style={{ color: "black", fontWeight: "bold" }}>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Gallary</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div id="carouselExampleFade" class="carousel slide carousel-fade container" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="row">
            <div className="col-md-6">
            <img src="assets/2.jpg" class="d-block w-100 heightt" alt="..." />
            </div>
            <div className="col-md-6">
              <p className="ShortTitle">Lorem ipsum dolor sit</p>
              <h5 className="longtext">Lorem ipsum dolor sit amet, consectetaur adipisicing </h5>
              <p className="ShortTitle">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In posuere felis nec tortor. Pellentesque faucibus. Ut accumsan ultricies elit. Maecenas at justo id velit placerat molestie. Donec dictum lectus non odio. Cras a ante vitae enim iaculis aliquam. Mauris nunc quam.</p>
              <p className="text">Pellentesque habitant</p>
              <p>25-02-2025</p>

            </div>
          </div>
        
        </div>
        <div class="carousel-item ">
          <div className="row">
            <div className="col-md-6">
            <img src="assets/3.jpg" class="d-block w-100 heightt" alt="..." />
            </div>
            <div className="col-md-6">
              <p className="ShortTitle">Icon Information System</p>
              <h5 className="longtext">Icon Information System Ltd. </h5>
              <p className="ShortTitle">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In posuere felis nec tortor. Pellentesque faucibus. Ut accumsan ultricies elit. Maecenas at justo id velit placerat molestie. Donec dictum lectus non odio. Cras a ante vitae enim iaculis aliquam. Mauris nunc quam.</p>
              <p className="text">Pellentesque habitant</p>
              <p>25-02-2025</p>

            </div>
          </div>
        
        </div>
        <div class="carousel-item ">
          <div className="row">
            <div className="col-md-6">
            <img src="assets/imageone.jpg" class="d-block w-100 heightt" alt="..." />
            </div>
            <div className="col-md-6">
              <p className="ShortTitle">Next Steps</p>
              <h5 className="longtext">Lorem ipsum dolor sit amet, consectetaur adipisicing </h5>
              <p className="ShortTitle">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In posuere felis nec tortor. Pellentesque faucibus. Ut accumsan ultricies elit. Maecenas at justo id velit placerat molestie. Donec dictum lectus non odio. Cras a ante vitae enim iaculis aliquam. Mauris nunc quam.</p>
              <p className="text">Pellentesque habitant</p>
              <p>25-02-2025</p>

            </div>
          </div>
        
        </div>

      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"         data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
    </>
  );
}

export default Website;
