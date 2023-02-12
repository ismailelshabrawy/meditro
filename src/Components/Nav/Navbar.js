import React from 'react';
import { Navbar , Container , NavDropdown , Nav } from 'react-bootstrap';
import './Nav.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Navbars = ()=> {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand >
                    <img src={logo} title="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="active">Home</Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Abou Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">FAQ Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Login / Register</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Service Details</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/contact">Contact us</Link>
                        <Nav.Link ><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                        <Nav.Link >
                            <FontAwesomeIcon icon={faPhone} className="phone" />
                            (+01) 999 888 777</Nav.Link>
                        <Nav.Link>
                            <button>Contact Us <span> <FontAwesomeIcon icon={faArrowLeft} /></span></button>
                        </Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;