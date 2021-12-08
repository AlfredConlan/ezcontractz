import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/img/logo.png";

//Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import AuthenticationButton from "./AuthenticationButton";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="ms-5">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Link to="/tasks" style={{ textDecoration: "none" }} className="nav-link">
                Tasks
              </Link>
              <Link to="/contractor-search" style={{ textDecoration: "none" }} className="nav-link">
                ContractorSearch
              </Link>
              <Link to="/admin" style={{ textDecoration: "none" }} className="nav-link">
                Admin
              </Link>
              <Link to="/profile" style={{ textDecoration: "none" }} className="nav-link">
                Profile
              </Link>
              <Link to="/aboutus" style={{ textDecoration: "none" }} className="nav-link">
                About Us
              </Link>
              <AuthenticationButton />
              {/* <Link to="/login" style={{ textDecoration: "none" }} className="nav-link">
                Login
              </Link> */}
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
