import { useNavigate } from "react-router-dom";
import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import Advantages from "../Advantages/Advantages";
import HomeCover from "../Cover/HomeCover";
import Features from "../Features/Features";
import Testimonials from "../Testimonials/Testimonials";
import ThreeStep from "../ThreeStep/ThreeStep";
import UnderCover from "../UnderCover/UnderCover";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ContactUs from "../ContactUs/ContactUs";
import HomeIcons from "../HomeIcons/HomeIcons";
import HomeFooter from "../../Shared/Footer/HomeFooter";


const Home = () => {
    const navigate = useNavigate()
    const {User} = useContext(AuthContext);
    if (!User) {
        navigate("/login");
       
      }
    return (
        <div>
            
            <HomeNavbar/>
            <div className="pt-24">
            <HomeCover/>
            </div>
            <UnderCover/>
            <Advantages/>
            <WhyChooseUs/>
            <ThreeStep/>
            <Features/>
            <Testimonials/>
            <ContactUs/>
            <HomeIcons/>
            <HomeFooter/>
        </div>
    );
};

export default Home;