/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { Nav } from 'react-bootstrap';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DrawerContainer from './DrawerContainer';
import { Link } from 'react-router-dom';
import {AiOutlineArrowRight} from "react-icons/ai"
const NavDrawer = ({isOpen,setIsOpen, handleLogOut } ) => {
    const {User} = useContext(AuthContext)
    // const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
            >
                <DrawerContainer>
                  <div className='flex gap-2 items-center'>
    <div><img src={User?.photoURL} alt="" className='w-12 h-12 rounded-full'/></div>
    <div>{User?.displayName}</div>
                  </div>
                 <hr />
                  <div className='mt-5'>

                  <div className='flex items-center gap-1 group hover:translate-x-1 duration-300'>
                  <Link to="/userInfo" className='no-underline'><span className='text-black no-underline'> Your Info</span></Link>
                    <AiOutlineArrowRight className='hidden group-hover:block '/>
                  </div>
                  <div className='flex items-center gap-1 group hover:translate-x-1 duration-300'>
                  <Link to="/feedbacks" className='no-underline'><span className='text-black no-underline'> Feedbacks</span></Link>
                    <AiOutlineArrowRight className='hidden group-hover:block '/>
                  </div>

                  </div>
                  <hr />
              <div className='mt-12'>
              {
              User && <><AwesomeButton><Nav.Link className="" onClick={handleLogOut}> <span className='text-white'>Log Out</span> </Nav.Link></AwesomeButton></>
            }
              </div>
                </DrawerContainer>
            </Drawer>
        </>
    );
};

export default NavDrawer;