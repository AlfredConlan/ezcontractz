import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

//Import Components
// import Contractor from './Contractor';
// Placeholder for components
// import taskList from './taskList';
// import Profile from './Profile';
// import AboutUs from './AboutUs';

export default function NavBar() {
  return (
    <BrowserRouter>
      <div>
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
          <Navbar.Brand href="#home">EZ Contracts Logo</Navbar.Brand>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                {/* <Link to='/dashboard' style={{textDecoration:'none'}} className = "nav-link">Dashboard</Link> */}
                {/* <Link to='/Contractor'style={{textDecoration:'none'}} className = "nav-link">Contractor Search</Link> */}
                <Link to="/TaskList" style={{ textDecoration: "none" }} className="nav-link">
                  Tasks
                </Link>
                <Link to="/Profile" style={{ textDecoration: "none" }} className="nav-link">
                  Profile
                </Link>
                <Link to="/AboutUs" style={{ textDecoration: "none" }} className="nav-link">
                  AboutUs
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Routes>
        {/* <Route exact path='/'component={<Home />}/> */}
        {/* <Route path="Contractor" element={<Contractor />} /> */}
        <Route path="taskList" element={<taskList />} />
        <Route path="dashboard" element={<dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
