import { Outlet } from "react-router-dom";
import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import HomeFooter from "../../Shared/Footer/HomeFooter";


const ResidentialSolar = () => {
    return (
        <div>
            <HomeNavbar/>
            <Outlet/>
            <HomeFooter/>
        </div>
    );
};

export default ResidentialSolar;