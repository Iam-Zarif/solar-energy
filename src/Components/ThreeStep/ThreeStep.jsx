/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import HomeContainer from "../../Container/HomeContainer";
import img1 from "../../assets/media/Icon (1).png"
import img2 from "../../assets/media/Icon (2).png"
import img3 from "../../assets/media/Icon (3).png"

const ThreeStep = () => {
    return (
        <div className="bg-sky-50 mt-20 h-full py-12" data-aos="fade-left">
            <HomeContainer>
                <div className="">
                    <p className="lg:text-xl text-center font-semibold text-sky-600">Let’s Get Started</p>
                    <p className="lg:text-4xl text-center font-bold">Our Three Step Procedure</p>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 mt-16 gap-8">
                   <div className=" flex flex-col items-center bg-white shadow-md rounded-xl py-12 px-14 relative group">
                   <img src={img1} alt="" />
                   <p className="text-sky-600 lg:text-2xl font-semibold">Design and Planning</p>
                   <p className="font-semibold text-slate-500  text-justify">This step involves building the actual project. You'd develop the React frontend, create the MongoDB database, and implement the functionality to manage and display solar-related data.</p>
                   <Link to="/residentialSolar" className="mt-8 font-semibold underline">Find a Solar - </Link>
                   <div className="h-1 absolute bottom-0 w-full group-hover:bg-sky-700 duration-150 transition"></div>
                   </div>
                   <div className=" flex flex-col items-center bg-white shadow-md rounded-xl py-12 px-14 relative group">
                   <img src={img1} alt="" />
                   <p className="text-sky-600 lg:text-2xl font-semibold">Development and Implement</p>
                   <p className="font-semibold text-slate-500  text-justify">In this step, you would focus on designing the solar project, including the layout, components, and database structure. Planning involves setting objectives and defining the scope of the project.</p>
                   <Link to="/residentialSolar" className="mt-8 font-semibold underline">Find a Solar - </Link>
                   <div className="h-1 absolute bottom-0 w-full group-hover:bg-sky-700 duration-150 transition"></div>
                   </div>
                   <div className=" flex flex-col items-center bg-white shadow-md rounded-xl py-12 px-14 relative group">
                   <img src={img1} alt="" />
                   <p className="text-sky-600 lg:text-2xl font-semibold">Testing and Deployment</p>
                   <p className="font-semibold text-slate-500  text-justify">In the final step, you'd thoroughly test the project to ensure it works correctly, is free of bugs, and meets the project's requirements. Once testing is complete, you can deploy the project to make it accessible to users.</p>
                   <Link to="/residentialSolar" className="mt-8 font-semibold underline">Find a Solar - </Link>
                   <div className="h-1 absolute bottom-0 w-full group-hover:bg-sky-700 duration-150 transition"></div>
                   </div>
                </div>
            </HomeContainer>
        </div>
    );
};

export default ThreeStep;