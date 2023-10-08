import { useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
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


const Home = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    if (!user) {
        navigate("/login");
       
      }
    return (
        <div>
            
            <HomeNavbar/>
            <HomeCover/>
            <UnderCover/>
            <Advantages/>
            <WhyChooseUs/>
            <ThreeStep/>
            <Features/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;