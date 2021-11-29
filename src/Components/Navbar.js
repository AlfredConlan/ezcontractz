import React from "react";
import { Link } from "react-router-dom";

//Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src="../Assets/img/logo.png" alt="logo" />
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Link to="/tasks" style={{ textDecoration: "none" }} className="nav-link">
                Tasks
              </Link>
              {/* <Link to="/ContractorSearch" style={{ textDecoration: "none" }} className="nav-link">
                Profile
              </Link> */}
              <Link to="/admin" style={{ textDecoration: "none" }} className="nav-link">
                Admin
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }} className="nav-link">
                Login
              </Link>
              {/* <Link to="/AboutUs" style={{ textDecoration: "none" }} className="nav-link">
                AboutUs
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
