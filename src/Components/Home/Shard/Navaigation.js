import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar className="custome-bg w-100" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Hostel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className="text-white nav_link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="text-white nav_link">
              Dashboard
            </Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/login">
            <div className="login-or-signup">
              <button className="login-btn">Login</button>
            </div>
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <div className="login-or-signup">
              <button className="login-btn">Log Out</button>
            </div>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
