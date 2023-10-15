/* eslint-disable react/prop-types */
import { AwesomeButton } from "react-awesome-button";


const AdvantagesCard = ({benefit}) => {
    const {title, short_description, image} = benefit; 
    return (
        <>
            <div  className="flex flex-col items-center rounded-xl shadow-md shadow-slate-400 lg:pb-10 pb-6">
                <img src={image} className="h-72 w-full" alt="image" />
                <p className="text-sky-600 lg:text-3xl mt-3 font-semibold">{title}</p>
                <p className="font-semibold text-slate-400 lg:px-12 px-5 text-center mt-3 ">
                  {short_description}
                </p>
                <button className="underline"><AwesomeButton>Learn More</AwesomeButton></button>
              </div>
        </>
    );
};

export default AdvantagesCard;