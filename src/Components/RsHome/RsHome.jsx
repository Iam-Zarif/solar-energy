import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import ContactUs from "../ContactUs/ContactUs";
import RsCover from "../RsCover/RsCover";
import RsPowerHome from "../RsPowerHome/RsPowerHome";
import RsProjects from "../RsProjects/RsProjects";


const RsHome = () => {
    return (
        <div>
            <HomeNavbar/>
            <div className="pt-20"><RsCover/></div>
            <RsPowerHome/>
            <RsProjects/>
            <ContactUs/>
        </div>
    );
};

export default RsHome;