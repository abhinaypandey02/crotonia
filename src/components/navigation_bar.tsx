import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import crotoniaLogo from '../static/images/crotoniaLogo.png';
export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand ><img className="ml-3 ml3 " height={60} src={crotoniaLogo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
