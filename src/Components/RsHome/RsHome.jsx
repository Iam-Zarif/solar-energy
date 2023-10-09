import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import RsCover from "../RsCover/RsCover";
import RsPowerHome from "../RsPowerHome/RsPowerHome";


const RsHome = () => {
    return (
        <div>
            <HomeNavbar/>
            <div className="pt-20"><RsCover/></div>
            <RsPowerHome/>
        </div>
    );
};

export default RsHome;