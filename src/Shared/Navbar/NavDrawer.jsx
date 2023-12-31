/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { Nav } from 'react-bootstrap';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DrawerContainer from './DrawerContainer';
import {  NavLink } from 'react-router-dom';
import {AiOutlineArrowRight} from "react-icons/ai"
import {MdFeedback} from "react-icons/md"
import {FaCircleUser} from "react-icons/fa6"
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

                  <div className='flex flex-col  gap-3 text-xl'>
                  <div className='flex items-center gap-1 group hover:translate-x-1 duration-300'>
                  <NavLink activeClassName="active" to="/userInfo" className='nav no-underline'><span className=' text-black  no-underline flex items-center gap-2'><FaCircleUser size={25}/>  <span>Your Info</span></span></NavLink>
                    <AiOutlineArrowRight className='hidden group-hover:block '/>
                  </div>
                  <div className='flex items-center gap-1 group hover:translate-x-1 duration-300'>
                  <NavLink activeClassName="active" to="/feedbacks" className='nav no-underline'><span className= 'text-black  no-underline flex items-center gap-2'> <MdFeedback size={25}/> <span>Feedbacks</span></span></NavLink>
                    <AiOutlineArrowRight className='hidden group-hover:block '/>
                  </div>
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