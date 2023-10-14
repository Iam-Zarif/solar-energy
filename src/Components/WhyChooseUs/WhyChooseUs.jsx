import HomeContainer from "../../Container/HomeContainer";
import img from "../../assets/media/Rectangle 3.png"
import icon from "../../assets/media/check (1).png"

const WhyChooseUs = () => {
    return (
        <HomeContainer>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-36">
                <div>
                    <img src={img} alt="" className=""/>
                </div>
                <div className="mx-auto  ">
                    <p className="lg:text-4xl font-semibold text-sky-600">Why Choose Us?</p>
                    <p className="font-semibold">Creating quality urban lifestyles,building stronger communities</p>
                    <div className="grid lg:grid-cols-2 grid-cols-1 font-semibold gap-4 mt-5">
                        <div className="flex items-center gap-1"><div><img src={icon} alt="" /> </div><span>Experienced</span></div>
                        <div className="flex items-center gap-1"><div><img src={icon} alt="" /> </div><span>Reliable</span></div>
                        <div className="flex items-center gap-1"><div><img src={icon} alt="" /> </div><span>Sustainable</span></div>
                        <div className="flex items-center gap-1"><div><img src={icon} alt="" /> </div><span>Affordable</span></div>
                        <div className="flex items-center gap-1"><div><img src={icon} alt="" /> </div><span>Customizable</span></div>
                        <div className="flex items-center gap-1"><div><img src={icon} alt="" /> </div><span>Trustworthy</span></div>
                      
                    </div>
                </div>
            </div>
            
        </HomeContainer>
    );
};

export default WhyChooseUs;