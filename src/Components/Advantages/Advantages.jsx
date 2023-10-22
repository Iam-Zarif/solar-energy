import { useEffect, useState } from "react";
import HomeContainer from "../../Container/HomeContainer";

import AdvantagesCard from "./AdvantagesCard";

const Advantages = () => {
  const [Benefits, setBenefits] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/benefits")
      .then((res) => res.json())
      .then((data) => {
        setBenefits(data);
        //   console.log(data);
      });
  }, []);
 
  return (
    <HomeContainer>
      <div className="mt-24" data-aos="fade-up">
        <div>
          {" "}
          <p className="text-center lg:text-2xl text-sky-600">ADVANTAGES</p>
          <p className="text-center lg:text-4xl font-semibold ">
            Benefits Of Going Solar
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-24 grid-cols-1 mt-14 ">
       

          {
            Benefits.map((benefit) =>{
                return ( <AdvantagesCard key={benefit._id} benefit={benefit}></AdvantagesCard>)
            })
          }
         
          
        </div>
      </div>
    </HomeContainer>
  );
};

export default Advantages;
