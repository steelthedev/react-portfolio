import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
const NavBar = () => {
    return ( 
      <Navbar 
      bg="myDark" 
      variant="dark"
      fixed="top"
      expand="md"
      className="mynav"
      collapseOnSelect>
          <Navbar.Brand >
              <a href="/"
              className="navbrand">IngeniousDev</a>
          </Navbar.Brand>
          <Navbar.Toggle className="toggle shadow-none"></Navbar.Toggle>
          <Navbar.Collapse className="collapse justify-content-center mr-5">
          <Nav className=" ms-auto text-center ml-auto">
              <Nav.Link href="#home" className="navlink">Home</Nav.Link>
              <Nav.Link href="#about" className="navlink">About</Nav.Link>
              <Nav.Link href="#profile" className="navlink">Profile</Nav.Link>
              <Nav.Link href="#portfolio" className="navlink">Portfolio</Nav.Link>
              <Nav.Link href="#services" className="navlink">Services</Nav.Link>
              <Nav.Link href="#contact" className="navlink">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
		
     );
}
 
export default NavBar;