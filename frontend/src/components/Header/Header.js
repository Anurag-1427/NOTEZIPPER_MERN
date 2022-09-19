import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mr-sm-2"
                aria-label="Search"
              />
            </Form>
          </Nav>

          <Nav>
            <Nav.Link href="#home">My Notes</Nav.Link>
            <NavDropdown title="Anurag Sharma" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
