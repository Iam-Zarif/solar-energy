import { AwesomeButton } from "react-awesome-button";
import HomeContainer from "../../Container/HomeContainer";
import img1 from "../../assets/media/Vector.png"
import img2 from "../../assets/media/Vector (1).png"
import img3 from "../../assets/media/Vector (2).png"
import img4 from "../../assets/media/Vector (3).png"

const RsPowerHome = () => {
    return (
        <div className="bg-sky-50 lg:mt-40 py-20">
            <HomeContainer>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center">
                    <div>
                        <p className="lg:text-4xl text-xl font-bold">Power Your <span className="text-sky-700">Home</span> with Solar Energy</p>
                        <p className="text-slate-500 font-semibold">Save Money and Reduce Your Carbon Footprint</p>
                        <button className="mt-4 w-1/3"><AwesomeButton className="w-full"><span className="text-xl">Contact Us</span></AwesomeButton></button>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
<div>
<div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
    <div className="flex gap-2 items-center"><div><img src={img1} alt="" /></div>
    <p className="text-sky-700 font-bold text-xl">Reduce your electricity bills</p>
    </div>
    <div>
    <p className="font-semibold text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl.</p>
    </div>
</div>
</div>
<div>
<div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
    <div className="flex gap-2 items-center"><div><img src={img2} alt="" /></div>
    <p className="text-sky-700 font-bold text-xl">Reduce your electricity bills</p>
    </div>
    <div>
    <p className="font-semibold text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl.</p>
    </div>
</div>
</div>
<div>
<div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
    <div className="flex gap-2 items-center"><div><img src={img3} alt="" /></div>
    <p className="text-sky-700 font-bold text-xl">Reduce your electricity bills</p>
    </div>
    <div>
    <p className="font-semibold text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl.</p>
    </div>
</div>
</div>
<div>
<div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
    <div className="flex gap-2 items-center"><div><img src={img4} alt="" /></div>
    <p className="text-sky-700 font-bold text-xl">Reduce your electricity bills</p>
    </div>
    <div>
    <p className="font-semibold text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl.</p>
    </div>
</div>
</div>
                    </div>
                </div>
            </HomeContainer>
            
        </div>
    );
};

export default RsPowerHome;