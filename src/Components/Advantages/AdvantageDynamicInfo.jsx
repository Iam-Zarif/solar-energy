/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiTwotoneShop } from "react-icons/ai";
import HomeContainer from "../../Container/HomeContainer";
import { FaLocationDot } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const AdvantageDynamicInfo = ({ data }) => {
  const {
    image,
    shop_name,
    address,
    available_product_number,
    cost,
    details_description,
    purchase_number,
    short_description,
    title,
  } = data;
  console.log(data);
  return (
    <div className="lg:pt-36">
      <HomeContainer>
        <div></div>
        <div className="grid lg:grid-cols-12 lg:gap-10">
          <div className="col-span-4">
            <div>
              <img src={image} className="lg:w-96" alt="" />
            </div>
            <div className="lg:mt-8">
              <p className="flex items-center gap-2">
                {" "}
                <AiTwotoneShop size={26} />{" "}
                <span className="text-lg font-semibold">{shop_name}</span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <FaLocationDot size={26} />{" "}
                <span className="text-lg font-semibold">{address}</span>
              </p>
              <div>
                <Marquee>
                  <div className="w-28 h-1 bg-sky-700"></div>
                </Marquee>
              </div>
              <div className="mt-10">
              <p><span className="font-bold">available Products :</span> {available_product_number}</p>
              <p><span className="font-bold">Cost for per product : </span>$ {cost}</p>
              <p className="font-bold">{purchase_number} Buyers</p>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <p className="lg:text-2xl font-semibold ">{short_description}</p>

            <p className="text-wrap lg:mt-10 mt-5 font-semibold text-slate-500 tracking-widest text-justify">
              {details_description}
            </p>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
};

export default AdvantageDynamicInfo;
