/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */




const DynamicTestimonials1 = ({Feedback, UserInfo}) => {
 
    
    const {name, occupation, feedback} = Feedback;
    return (
        <div className=" flex content-center items-center gap-3" data-aos="fade-down">
            {/* The image is not completed yet */}
               <div> <img  src={UserInfo?.image} className="lg:w-14 lg:h-14 w-8 border-4 border-sky-700  rounded-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">{name}</div>
                    <div className="text-slate-700">{occupation}</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md bg-slate-50  rounded-l-xl shadow-slate-400 lg:px-12 py-6">
                 <p className="font-semibold text-slate-500">{feedback}</p>
                </div>
                </div>
                </div>
    );
};

export default DynamicTestimonials1;