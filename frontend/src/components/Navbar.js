// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.jpeg'; // Ensure the path is correct

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbar-custom">
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <img src={logo} alt="Cafe Lavinia Logo" className="navbar-logo" />
                <span className="ml-2">Cafe Lavinia</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/items">Items</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/privacy">Privacy Policy</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menu;
