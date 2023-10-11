/* eslint-disable react/prop-types */
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const NavDrawer = ({isOpen,setIsOpen } ) => {
    // const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
        </div>
    );
};

export default NavDrawer;