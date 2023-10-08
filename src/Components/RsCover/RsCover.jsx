import cover from "../../assets/media/Backgroud Image.png"
import img1 from "../../assets/media/Rectangle 4.png"
import img2 from "../../assets/media/Rectangle 5.png"
import img3 from "../../assets/media/Rectangle 6.png"
import img4 from "../../assets/media/Rectangle 7.png"


const RsCover = () => {
    return (
        <div className="h-full relative">
        <img src={cover} alt="" className="w-full lg:h-[700px]"/>
        <div className="flex justify-evenly absolute top-3/4 left-80">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        </div>
        </div>
    );
};

export default RsCover;