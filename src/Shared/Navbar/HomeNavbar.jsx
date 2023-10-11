
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/media/logo.png"
import {MdCall} from "react-icons/md"
import NavContainer from './NavContainer';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import { Toaster, toast } from 'react-hot-toast';


//import styles 👇
import 'react-modern-drawer/dist/index.css'
import NavDrawer from './NavDrawer';
const HomeNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  const { User, logOut} = useContext(AuthContext);
  const handleLogOut =() =>{
    logOut().then(res =>
      {
        toast.success('Logged Out ', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      console.log(res)}).catch(err => console.error(err));
  }
  console.log(User)
    return (
        <div className='w-full'>
          <NavContainer>
          <Toaster/>
          <div className='w-full lg:fixed  lg:left-0 z-50'>
            <Navbar expand="lg" className="bg-body-tertiary ">
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
            <Link to="/"><Nav.Link href='/'>Home</Nav.Link></Link>
            <Link to="/commercialSolar"><Nav.Link href='/commercialSolar'>Commercial Solar</Nav.Link></Link>
            <Link to="/residentialSolar"><Nav.Link href='/residentialSolar'>Residential Solar</Nav.Link></Link>
           <Link to="/contact">  <Nav.Link href='/contact'>Feedback</Nav.Link></Link>
  <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} handleLogOut={handleLogOut}/>
          
           
          </Nav>
          <Form className="d-flex gap-4">
            {
              User ? <><img src={User.photoURL} onClick={toggleDrawer} className='w-12 h-12 rounded-full border-4 border-sky-700' alt="" /></>
              :
              <><Link to="/login"><button className='shadow-md rounded-md px-4 py-2 bg-sky-700 text-white font-semibold'>Login</button></Link></>
            }

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
        </NavContainer>
        </div>
    );
};

export default HomeNavbar;