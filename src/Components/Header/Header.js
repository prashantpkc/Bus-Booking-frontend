import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {LoginAtom} from "../../RecoilAtom/Atoms"
import {useRecoilState} from "recoil"
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token")); // set initial value of isLoggedIn based on token
  const tonav = useNavigate();
  const [loggedIn,setLoggedIn]=useRecoilState(LoginAtom)
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedIn(false)
    localStorage.removeItem("token");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#FD4858", color: "white" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand onClick={() => tonav("/")}>
          <img
            src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
            height="49px"
            width="79px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {loggedIn && (
              <Nav.Link onClick={handleLogout} className="fw-bold">
                Logout
              </Nav.Link>
            )}
            {!loggedIn && (
              <NavDropdown
                title={
                  <img
                    src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"
                    height="30"
                  />
                }
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  onClick={() => {
                    tonav("/Register");
                  }}
                >
                  Sign Up
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  onClick={() => {
                    tonav("/login");
                  }}
                >
                  Sign in
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
