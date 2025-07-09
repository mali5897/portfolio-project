// src/components/Navbar.jsx
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; // Import Bootstrap components
// No need for './Navbar.css' import anymore

const AppNavbar = () => {
  // Renamed to AppNavbar to avoid conflict with imported Navbar component
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="shadow"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          Muhammad Ali
        </Navbar.Brand>{" "}
        {/* fw-bold for font-weight bold, fs-3 for font-size 3 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* ms-auto pushes links to the right */}
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
