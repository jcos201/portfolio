import { Link } from 'gatsby';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import logo from "../../../static/my_logo.png";


const myLogo = {
    margin: '0',
}

const navText = {
    textAlign: 'right',
}

const Header = (props) => (
    // Collapses Navbar to burger menu on screens smaller than 992px
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="/">
            <img src={logo} style={myLogo} alt="My Logo"/>
        </Navbar.Brand>
        {/* These items will be part of burger menu on smaller screens */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
                {/* Need to have href in order to toggle burger menu closed after onClick */}
                <Nav.Link href="/" style={navText}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" href="/about" style={navText}>About</Nav.Link>
                <Nav.Link as={Link} to="/projects" href="/projects" style={navText}>Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact" href="/contact" style={navText}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default Header;
