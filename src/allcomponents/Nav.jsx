import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="logo" id='logo' /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">home</Nav.Link>
            <Nav.Link to="/Products">Products</Nav.Link>
            <Nav.Link to="/Pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;