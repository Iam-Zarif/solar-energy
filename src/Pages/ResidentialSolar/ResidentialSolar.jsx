import { Outlet, useNavigate } from "react-router-dom";
import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import HomeFooter from "../../Shared/Footer/HomeFooter";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ResidentialSolar = () => {
    const navigate  = useNavigate()
    const {user} = useContext(AuthContext);
    if(!user){
navigate("/login");
    }
    return (
        <div>
            <HomeNavbar/>
            <Outlet/>
            <HomeFooter/>
        </div>
    );
};

export default ResidentialSolar;