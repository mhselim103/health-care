import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();
  // console.log(user.email);
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>Noble Cure</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home">
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            {!user.email ? (
              <Nav.Link as={HashLink} to="/login">
                Log In
              </Nav.Link>
            ) : (
              <Nav.Link>
                {" "}
                <span>{user.displayName}</span>{" "}
              </Nav.Link>
            )}
            {!user.email ? (
              <Nav.Link as={HashLink} to="/register">
                Sign Up
              </Nav.Link>
            ) : (
              <Nav.Link onClick={logOut}>Log Out</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
