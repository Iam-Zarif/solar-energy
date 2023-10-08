
import NavContainer from "../../Shared/Navbar/NavContainer"
import img1 from "../../assets/media/image 1.png"
import img2 from "../../assets/media/image 2.png"
import img3 from "../../assets/media/image 3.png"
import img4 from "../../assets/media/image 4.png"
import img5 from "../../assets/media/image 5.png"
const HomeIcons = () => {
    return (
        <NavContainer>
            <div className="mt-40">
                <p className="text-center font-bold text-sky-700 text-xl">We working with customers brands and startups </p>
            </div>

            <div className="grid lg:grid-cols-5 grid-cols-1 gap-y-5  mt-12">
<img src={img1} alt="" className="mx-auto"/>
<img src={img2} alt="" className="mx-auto"/>
<img src={img3} alt="" className="mx-auto"/>
<img src={img4} alt="" className="mx-auto"/>
<img src={img5} alt="" className="mx-auto"/>
                 
            </div>
        </NavContainer>
    );
};

export default HomeIcons;