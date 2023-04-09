import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, fas } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const MyNavbar =(props)=> {
  console.log(props)
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {!props.home && <Nav.Link as={Link} to="/">Home</Nav.Link>}
            {!props.about && <Nav.Link  as={Link} to="/about">About</Nav.Link>}
          </Nav>
          <Form className="d-flex">
          <Navbar.Brand as={Link} to="/" ><FontAwesomeIcon icon={faEye} className="me-2" />Imaginify</Navbar.Brand>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;