import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavbarComp() {
   return (
      <div>
         <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
            <Container>
               <Navbar.Brand as={Link} to="/">
                  ATP
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link as={Link} to="/">
                        Home
                     </Nav.Link>
                     <Nav.Link as={Link} to="/sign-up">
                        Sign Up
                     </Nav.Link>
                  </Nav>
                  <Button as={Link} to="/log-in" variant="outline-info">
                     Log In
                  </Button>{" "}
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
}

export default NavbarComp;

/* <Nav.Link href="#features">Features</Nav.Link> */

/* <Nav.Link href="#exercise-library">Exercise Library</Nav.Link> */
