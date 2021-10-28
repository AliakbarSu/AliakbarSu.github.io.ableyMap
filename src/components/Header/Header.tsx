import React from 'react'
import './header.scss'
import { Navbar, Nav, Container } from 'react-bootstrap'



const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Abley Map Application</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#howTo">How To</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header