
import img1 from "../../assets/media/Icon Colorful.png"
import img2 from "../../assets/media/Icon Colorful (1).png"
import img3 from "../../assets/media/Icon Colorful (2).png"
import img4 from "../../assets/media/Icon Colorful (3).png"
import { AwesomeButton } from "react-awesome-button";
import NavContainer from "../../Shared/Navbar/NavContainer";

const Features = () => {
    return (
        <NavContainer>
        <div className="py-10">
        <p className="text-center lg:text-4xl font-bold"> Features</p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1">
            <div className="flex mx-8 px-8 flex-col py-5 items-center content-center shadow-md  shadow-slate-400">
                <img src={img1} alt="" />
                <p className="text-2xl font-bold">Pro support</p>
                <p className="font-sm font-semibold  text-slate-400 text-center mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                <AwesomeButton className="mt-5 w-full">Read More</AwesomeButton>
            </div>
            <div className="flex mx-8 px-8 flex-col py-5 items-center content-center shadow-md  shadow-slate-400">
                <img src={img2} alt="" />
                <p className="text-2xl font-bold">Unique design</p>
                <p className="font-sm font-semibold  text-slate-400 text-center mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                <AwesomeButton className="mt-5 w-full">Read More</AwesomeButton>
            </div>
            <div className="flex mx-8 px-8 flex-col py-5 items-center content-center shadow-md  shadow-slate-400">
                <img src={img3} alt="" />
                <p className="text-2xl font-bold">Future Proof</p>
                <p className="font-sm font-semibold  text-slate-400 text-center mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                <AwesomeButton className="mt-5 w-full">Read More</AwesomeButton>
            </div>
            <div className="flex mx-8 px-8 flex-col py-5 items-center content-center shadow-md  shadow-slate-400">
                <img src={img4} alt="" />
                <p className="text-2xl font-bold">Pixel Perfect</p>
                <p className="font-sm font-semibold  text-slate-400 text-center mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                <AwesomeButton className="mt-5 w-full">Read More</AwesomeButton>
            </div>
        </div>
        </NavContainer>
    );
};

export default Features;