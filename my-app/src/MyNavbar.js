import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="py-4 mb-4 navbar-dark" bg="dark">
      <Navbar.Brand href="#" style={{ paddingLeft: '4%' }}>Spotify Recommendation App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
      <Navbar.Collapse id="basic-navbar-nav" className='mx-auto justify-content-end'>
        <Nav>
          <Nav.Link href="#">How</Nav.Link>
          <Nav.Link href="#">Why</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Back to Recommendations</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
     
    </Navbar>
  );
}

export default MyNavbar;
