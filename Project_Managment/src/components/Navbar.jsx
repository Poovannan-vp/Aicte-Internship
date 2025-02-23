import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#7670cd" }}>

      <Container>
        <Navbar.Brand as={Link} to="/">ProjectPilot</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/tasks">Tasks</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;


