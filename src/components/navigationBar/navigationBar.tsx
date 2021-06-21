import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useUser } from "../../contexts/userContext";
import crotoniaLogo from "../../static/images/crotoniaLogo.png";
import { signOut } from "../../utils/firebase/auth";
export default function NavigationBar() {
    const [user] = useUser();
    return (
        <Navbar className="px-3" bg="light" expand="lg">
            <Navbar.Brand>
                <img
                    alt="crotonia logo"
                    height={60}
                    src={crotoniaLogo}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100">
                    <Nav.Link href="#" className="me-auto">Home</Nav.Link>
                    {user && (
                        <Nav.Link href="#" onClick={signOut}>
                            Sign Out
                        </Nav.Link>
                    )}
                    {!user && <Nav.Link href="#login">Login</Nav.Link>}
                    {!user && <Nav.Link href="#signup">Register</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
