import Footer from "../../Shared/Footer/Footer";
import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import Advantages from "../Advantages/Advantages";
import HomeCover from "../Cover/HomeCover";
import Features from "../Features/Features";
import Testimonials from "../Testimonials/Testimonials";
import ThreeStep from "../ThreeStep/ThreeStep";
import UnderCover from "../UnderCover/UnderCover";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";


const Home = () => {
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