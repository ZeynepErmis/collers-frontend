import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigationBar.css';

function NavigationBar() {
  return (
    <>
   <Navbar className="custom-nav" expand="md">
    <Container>
        <Navbar.Brand href="#home">Collers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Products</Nav.Link>
                <Nav.Link href="#features">Solutions</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#resources">Resources</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#signup" className="custom-signup">Sign up now</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

    </>
  );
}

export default NavigationBar;