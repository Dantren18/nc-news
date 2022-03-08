import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
  return (
    // <Navbar bg="dark" variant="dark">
    //   <LinkContainer to="/">
    //     <Nav.Link>Home</Nav.Link>
    //   </LinkContainer>
    //   <LinkContainer to="/Users">
    //     <Nav.Link>Users</Nav.Link>
    //   </LinkContainer>
    // </Navbar>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">News you can Trust 110%!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
