import { useContext } from "react";
import HomeFooter from "../../Shared/Footer/HomeFooter";
import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Infos from "./Infos";


const UserInfo = () => {
    const {User} = useContext(AuthContext)
    return (
        <div>
            <HomeNavbar/>
<Infos User={User}/>
            <HomeFooter/>
        </div>
    );
};

export default UserInfo;