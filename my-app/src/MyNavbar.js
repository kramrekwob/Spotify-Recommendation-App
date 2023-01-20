import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const links = [
  {name: 'How', path: '/how'},
  {name: 'Why', path: '/why'},
  {name:'Code', path:'/code'},
  {name:'Analyze a Track', path:'/analyze'}
 ] ;
const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="py-4 mb-4 navbar-dark" bg="dark">
      <Navbar.Brand href="/" style={{ paddingLeft: '4%'}}>SoundSuggester</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end px-5'>
        <Nav>
        {links.map(link => (
  <Nav.Link as={Link} to={link.path} key={link.name}>{link.name}</Nav.Link>
))}
        </Nav>
      </Navbar.Collapse>
     
    </Navbar>
  );
}

export default MyNavbar;
