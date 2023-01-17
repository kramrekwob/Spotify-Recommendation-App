import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const links = [
  {name: 'Home', path: '/'},
  {name: 'How', path: '/how'},
  {name: 'Why', path: '/why'},
 ] ;
const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="py-4 mb-4 navbar-dark" bg="dark">
      <Navbar.Brand href="/" style={{ paddingLeft: '4%' }}>Spotify Recommendation App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
      <Navbar.Collapse id="basic-navbar-nav" className='mx-auto justify-content-end'>
        <Nav>
        {links.map(link => (
  <Nav.Link as={Link} to={link.path} key={link.name}>{link.name}</Nav.Link>
))}
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Back to Recommendations</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
     
    </Navbar>
  );
}

export default MyNavbar;
