/* eslint-disable react/prop-types */
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";


const AdvantagesCard = ({benefit}) => {
    const {_id, title, short_description, image} = benefit; 
    console.log(_id);
    return (
        <>
            <div  className="flex flex-col items-center rounded-xl shadow-md shadow-slate-400 lg:pb-10 pb-6">
                <img src={image} className="h-72 w-full" alt="image" />
                <p className="text-sky-600 lg:text-3xl mt-3 font-semibold">{title}</p>
                <p className="font-semibold text-slate-400 lg:px-12 px-5 text-center mt-3 ">
                  {short_description}
                </p>
                <button className="underline text-white"><AwesomeButton><Link className="text-white" to={`/benefits/${_id}`}>Learn More</Link></AwesomeButton></button>
              </div>
        </>
    );
};

export default AdvantagesCard;