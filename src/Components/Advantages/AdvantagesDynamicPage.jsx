import { useLoaderData } from "react-router-dom";
import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import HomeFooter from "../../Shared/Footer/HomeFooter";
import AdvantageDynamicInfo from "./AdvantageDynamicInfo";


const AdvantagesDynamicPage = () => {
    const data = useLoaderData(); 
    return (
        <div>
            <HomeNavbar/>
             <AdvantageDynamicInfo data={data}/>

            <HomeFooter/>
        </div>
    );
};

export default AdvantagesDynamicPage;