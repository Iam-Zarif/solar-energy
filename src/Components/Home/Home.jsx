import Footer from "../../Shared/Footer/Footer";
import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import HomeCover from "../Cover/HomeCover";
import UnderCover from "../UnderCover/UnderCover";


const Home = () => {
    return (
        <div>
            <HomeNavbar/>
            <HomeCover/>
            <UnderCover/>
            <Footer/>
        </div>
    );
};

export default Home;