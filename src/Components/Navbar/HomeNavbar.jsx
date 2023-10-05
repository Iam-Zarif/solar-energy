
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/media/logo.png"
import {MdCall} from "react-icons/md"
const HomeNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
                <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 font-semibold flex gap-6"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Commercial Solar</Nav.Link>
            <Nav.Link href="#action2">Residential Solar</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex gap-4">
            <button className='shadow-md rounded-md px-4 py-2 bg-sky-700 text-white font-semibold'>Contact Us</button>

            <button className='shadow-md px-4 p-2 border rounded-md'>
              <div className='flex items-center'>
              <div><MdCall className='text-sky-700'/></div>
                <div>+012-345-677-890</div>
              </div>
                </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default HomeNavbar;