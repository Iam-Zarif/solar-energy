import HomeContainer from "../../Container/HomeContainer";


const Testimonials = () => {
    return (
       <div className="bg-sky-100 mt-32 h-full py-12">
         <HomeContainer>
            <div className="">
                <p className="text-xl font-bold text-sky-700 text-center">Our Testimonials</p>
                <p className="text-4xl font-semibold text-center">What Our Customers Says</p>
            </div>
        </HomeContainer>
       </div>
    );
};

export default Testimonials;