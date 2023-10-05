
import { Outlet } from 'react-router-dom';
import './App.css'
import HomeNavbar from './Shared/Navbar/HomeNavbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer';

function App() {

  return (
    <>
     <HomeNavbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
