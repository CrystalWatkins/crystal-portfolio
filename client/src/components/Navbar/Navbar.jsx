import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";


const NavbarPage = () => {
    return (
        <Navbar bg="black" expand="lg">
        <Navbar.Brand href="#home">Crystal's Portfolio
        <img
        src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/src/components/Navbar/meme.png?raw=true"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Crystal logo"
        rounded="true"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavbarPage;