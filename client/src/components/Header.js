import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { Navbar, Nav, Jumbotron } from 'react-bootstrap'; 

const Header = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/">Search</Link>
                <Nav.Link><Link to="/saved">Saved</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Jumbotron>
                <h1 className="text-center">(React) Google Books Search</h1>
                <p className="text-center">
                Search for and save books of interest!
                </p>
            </Jumbotron>
        </div>
    );
}


export default Header;