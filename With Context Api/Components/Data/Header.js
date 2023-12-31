import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ExpnContext from "../Store/ExpnContext";
import './styleSheet.css';
import { Button } from "react-bootstrap";
import { FaCalculator,FaUser, FaSignOutAlt } from 'react-icons/fa';

function Header() {
  const ctx = useContext(ExpnContext);
  const logOutHandler = () => {
    ctx.logOut();
    console.log('userLogOut');
  }

  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand>
          <h3 className="navTitle">
          Day -To -Day Tracker
            <FaCalculator className="calculatorIcon"  style={{ color : "green"}}/> 
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='/about' className="nav-link">About</Nav.Link>

            {ctx.isLoggedIn && (
              <>
                <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
                <NavDropdown title={ctx.name ? ctx.name : 'user'} id="basic-nav-dropdown">
                  
                  <NavDropdown.Item href="/user/profile">
                  <FaUser className="calculatorIcon" /> Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/user/changepassword">Change Password</NavDropdown.Item>
                  <NavDropdown.Item href="/contact">ContactUs</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOutHandler}> 
                   <FaSignOutAlt /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          {!ctx.isLoggedIn &&
            <Button className="loginBtn" href="/login">Login</Button>
          }
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;
