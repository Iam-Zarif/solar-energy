import { AwesomeButton } from "react-awesome-button"
import cover from "../../assets/media/Backgroud Image.png"
import img1 from "../../assets/media/Rectangle 4.png"
import img2 from "../../assets/media/Rectangle 5.png"
import img3 from "../../assets/media/Rectangle 6.png"
import img4 from "../../assets/media/Rectangle 7.png"
import HomeContainer from "../../Container/HomeContainer"


const RsCover = () => {
    return (
        <div className="h-full relative">
            <div>
                <p className="lg:text-7xl font-bold absolute text-white lg:top-52 lg:left-1/3">Residential Solar</p>
                <button className="absolute top-1/2 lg:left-[820px] text-center"><AwesomeButton className="w-full">View Recipes</AwesomeButton></button>
            </div>
        <img src={cover} alt="" className="w-full lg:h-[700px] "/>
       <HomeContainer>
       <div className="flex justify-between absolute top-3/4 left-80">
        <img src={img1} alt="" className=""/>
        <img src={img2} alt="" className=""/>
        <img src={img3} alt="" className=""/>
        <img src={img4} alt="" className=""/>
        </div>
       </HomeContainer>
        </div>
    );
};

export default RsCover;