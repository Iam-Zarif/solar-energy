/* eslint-disable no-unused-vars */
import HomeContainer from "../../Container/HomeContainer";
import img1 from "../../assets/media/Icon (1).png"
import img2 from "../../assets/media/Icon (2).png"
import img3 from "../../assets/media/Icon (3).png"

const ThreeStep = () => {
    return (
        <div className="bg-sky-100 mt-20 h-full py-12">
            <HomeContainer>
                <div className="">
                    <p className="lg:text-xl text-center font-semibold text-sky-600">Let’s Get Started</p>
                    <p className="lg:text-4xl text-center font-bold">Our Three Step Procedure</p>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 mt-16 gap-8">
                   <div className=" flex flex-col items-center bg-sky-50 shadow-md rounded-md py-12 px-14 relative group">
                   <img src={img1} alt="" />
                   <p className="text-sky-600 lg:text-4xl font-semibold">1 . Consultation</p>
                   <p className="font-semibold text-slate-500  text center">Our team will conduct a thorough assessment of your energy needs.</p>
                   <button className="mt-8 underline">Find a Solar - </button>
                   <div className="h-1 absolute bottom-0 w-full group-hover:bg-sky-700 duration-150 transition"></div>
                   </div>
                   <div className=" flex flex-col items-center bg-sky-50 shadow-md rounded-md py-12 px-14 relative group">
                   <img src={img1} alt="" />
                   <p className="text-sky-600 lg:text-4xl font-semibold">1 . Consultation</p>
                   <p className="font-semibold text-slate-500  text center">Our team will conduct a thorough assessment of your energy needs.</p>
                   <button className="mt-8 underline">Find a Solar - </button>
                   <div className="h-1 absolute bottom-0 w-full group-hover:bg-sky-700 duration-150 transition"></div>
                   </div>
                   <div className=" flex flex-col items-center bg-sky-50 shadow-md rounded-md py-12 px-14 relative group">
                   <img src={img1} alt="" />
                   <p className="text-sky-600 lg:text-4xl font-semibold">1 . Consultation</p>
                   <p className="font-semibold text-slate-500  text center">Our team will conduct a thorough assessment of your energy needs.</p>
                   <button className="mt-8 underline">Find a Solar - </button>
                   <div className="h-1 absolute bottom-0 w-full group-hover:bg-sky-700 duration-150 transition"></div>
                   </div>
                </div>
            </HomeContainer>
        </div>
    );
};

export default ThreeStep;