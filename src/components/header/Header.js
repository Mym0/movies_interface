import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom';

const Header = () => {
  const [token, setToken] = useState('')

useEffect(() => {
  setToken(localStorage.getItem('token'))
}, [token])

const navigate = useNavigate();

const handleLogout = () => { 
  localStorage.removeItem('token');
  setToken('')
  navigate('/')
 }


  return (
    <Navbar bg="dark" variant="dark" expand="lg" data-testid='navbar'>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} />
          Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/" data-testid='navbar-link'>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/watchList" data-testid='navbar-link'>
              Watch List
            </NavLink>
            <NavLink>
              Bitte eine Review hinterlassen!
            </NavLink>
          </Nav>
          {
            !token ?
            <>
          <Link to="/login" className="me-5 link-gradient">
            Login
          </Link>
          <Link to="/register" className="link-gradient">
            Register
          </Link>    
            </>
            :
            <Link onClick={handleLogout} className="me-5 link-gradient">
            Logout
          </Link>
          }
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
