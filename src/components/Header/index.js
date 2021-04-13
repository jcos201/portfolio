import { Link } from 'gatsby';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import * as styles from './Header.module.scss';

const navHeader = {
    width: '-webkit-fill-available',    
}


const Header = (props) => (
    <header class="sticky-top">  
        <Navbar style={navHeader} expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">Cossi.Dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

export default Header;

/*
 
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <h1 class="navbar-brand"></h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">dd</span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"> <Link class="nav-link active" aria-current="page" style={navLink} to="/">Home</Link> </li>
                        <li class="nav-item"> <Link class="nav-link active" aria-current="page" style={navLink} to="/about">About</Link> </li>
                        <li class="nav-item"> <Link class="nav-link active" aria-current="page" style={navLink} to="/projects">Projects</Link> </li>
                        <li class="nav-item"> <Link class="nav-link active" aria-current="page" style={navLink} to="/articles">Articles</Link> </li>
                        <li class="nav-item"> <Link class="nav-link active" aria-current="page" style={navLink} to="/contact">Contact</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    
*/
