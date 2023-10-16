/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AdvantagesCard = ({benefit}) => {
    const {_id, title, short_description, image} = benefit; 
    // console.log(_id);
    return (
        <div className="group ">
            <div  className="flex flex-col items-center rounded-xl shadow-md shadow-slate-400 hover:duration-300 hover:ease-in-out group-hover:border-b-4 group-hover:border-b-black lg:pb-10 pb-6">
                <img src={image} className="h-72 w-full" alt="image" />
                <p className="text-sky-600 lg:text-3xl mt-3 font-semibold">{title}</p>
                <p className="font-semibold text-slate-400 lg:px-12 px-5 text-center mt-3 ">
                  {short_description}
                </p>
                <Link className="text-white bg-sky-600 px-4 py-2 rounded-xl font-semibold hover:transform hover:transition-transform hover:scale-110 duration-300" to={`/benefits/${_id}`}>Learn More</Link>
              </div>
        </div>
    );
};

export default AdvantagesCard;