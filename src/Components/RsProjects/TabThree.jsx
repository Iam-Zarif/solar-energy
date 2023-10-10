import { AwesomeButton } from "react-awesome-button";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";


const TabThree = () => {
    const data = useLoaderData();
    console.log(data);
    const {
        
        details_description,
        how_it_works,
        location,
        
        photo2,
        photo3,
        price,
        read_time,
        short_description,
        title,
      } = data;
    return (
        <div className="w-full mt-4">
            <div className="flex justify-between ">
                <div><img src={photo2} alt="" /></div>
                <div><img src={photo3} alt="" /></div>
            </div>
            <div className="mt-16">
                <p className="lg:text-2xl font-bold text-sky-700">{title} (<span className="text-black font-semibold">{short_description}</span>)</p>
<div className="flex gap-16 items-center">
    <p className="flex items-center gap-1 "> <HiOutlineLocationMarker size={20}/>  <span className="text-lg font-semibold text-slate-400">{location}</span></p>
    <p className="text-lg font-semibold text-slate-400"><span className="text-black">Price</span> {price}</p>
    <p className="text-lg font-semibold text-slate-400"><span className="text-black">Read Time</span> {read_time} Min</p>
</div>
<div className="mt-8">
    <p className=""><span className="text-xl font-bold block">How It Works</span> <span className="mt-2 block  font-semibold text-slate-400">{how_it_works}. {how_it_works}</span></p>
    <p className=""><span className="text-xl font-bold block">Description</span> <span className="mt-2 block font-semibold text-slate-400">{details_description}. {details_description}. {details_description}. {details_description}. {details_description}</span></p>
</div>
                
            </div>
            <button className="w-full mt-12"><AwesomeButton className="lg:w-1/2 mx-auto"> <span className="text-xl">Purchase</span></AwesomeButton></button>
        </div>
    );
};

export default TabThree;