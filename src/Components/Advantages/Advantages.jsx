
import HomeContainer from "../../Container/HomeContainer";
import img from "../../assets/media/Icon.png"

const Advantages = () => {
    return (
       <HomeContainer>
         <div className="mt-24   ">
           <div> <p className="text-center lg:text-2xl text-sky-600">ADVANTAGES</p>
            <p className="text-center lg:text-4xl font-semibold ">Benefits Of Going Solar</p></div>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-14">
            <div className="flex flex-col items-center">
                <img src={img} alt="image" />
                <p className="text-sky-600 lg:text-3xl">Cost Savings</p>
                <p className="font-semibold text-slate-700">Enjoy significant savings on your energy bills.</p>
                <button className="underline">learn More</button>
            </div>
            <div className="flex flex-col items-center">
                <img src={img} alt="image" />
                <p className="text-sky-600 lg:text-3xl">Cost Savings</p>
                <p className="font-semibold text-slate-700">Enjoy significant savings on your energy bills.</p>
                <button className="underline">learn More</button>
            </div>
            <div className="flex flex-col items-center">
                <img src={img} alt="image" />
                <p className="text-sky-600 lg:text-3xl">Cost Savings</p>
                <p className="font-semibold text-slate-700">Enjoy significant savings on your energy bills.</p>
                <button className="underline">learn More</button>
            </div>
            </div>
        </div>
       </HomeContainer>
    );
};

export default Advantages;