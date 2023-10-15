/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdExpandLess } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import HomeContainer from "../../Container/HomeContainer";
import { AwesomeButton } from "react-awesome-button";
import { Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DynamicProjectTab from "./DynamicProjectTab";

const DynamicProjects = () => {
  const data = useLoaderData();
  const {
    _id,
    details_description,
    how_it_works,
    location,
    photo1,
    photo2,
    photo3,
    price,
    read_time,
    short_description,
    title,
  } = data;
  console.log(data);
  return (
    <div className="pt-32">
      <HomeContainer>
        <div>
          <p className="flex items-center gap-3 text-lg font-semibold text-slate-400">
            <span>residentialSolar</span>{" "}
            <MdExpandLess className="rotate-90" size={22} /> <span>{_id}</span>{" "}
          </p>
        </div>
        <div className="relative group">
          <p className="lg:text-2xl font-semibold">Products System</p>
          <div className="lg:w-44 absolute lg:top-9 lg:h-1 bg-sky-700 group-hover:bg-sky-500 duration-300"></div>
        </div>
        <div>
          <img src={photo1} className="w-full h-[500px]" alt="" />
        </div>
        <div>
          <p className="mt-8 text-xl font-bold">{short_description}</p>
          <p className="mt-5 font-semibold text-slate-500 text-justify">
            {details_description}. {details_description}. {details_description}
          </p>
          <p className="font-semibold text-slate-500 mt-5 text-justify">
            {details_description}
          </p>
        </div>
        <div>
          <button className="mt-8">
            <AwesomeButton>Contact Us</AwesomeButton>
          </button>
        </div>
        {/* Tabs */}
        <div className="mt-16">
          <DynamicProjectTab></DynamicProjectTab>
        </div>
      </HomeContainer>
    </div>
  );
};

export default DynamicProjects;
