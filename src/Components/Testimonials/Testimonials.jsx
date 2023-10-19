/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import HomeContainer from "../../Container/HomeContainer";
import img1 from "../../assets/media/Avatar.png";
import img2 from "../../assets/media/Avatar1.png";
import img3 from "../../assets/media/Avatar2.png";
import msgBox from "../../assets/media/speech-bubble(sm).png";
const Testimonials = () => {
  return (
    <div className="bg-sky-50 mt-32 h-full py-12 ">
      
      <HomeContainer>
        <div className="">
          <p className="text-xl font-bold text-sky-700 text-center">
            Our Testimonials
          </p>
          <p className="text-4xl font-semibold text-center">
            What Our Customers Says
          </p>
        </div>

        {/* Carousels */}
        <div className="mt-20 ">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper cursor-grab">
          <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1   lg:pb-72">
              <div className=" flex content-center items-center gap-3" data-aos="fade-up">
               <div> <img src={img1} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md bg-slate-50  rounded-l-xl shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
                <div className=" flex content-center items-center gap-3">
               <div> <img src={img2} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md bg-slate-50 rounded-xl  shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
                <div data-aos="fade-right" className=" flex content-center items-center gap-3">
               <div> <img src={img3} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md bg-slate-50  rounded-r-xl shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
              </div>
            </SwiperSlide>
          <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1   lg:pb-72">
              <div className=" flex content-center items-center gap-3">
               <div> <img src={img1} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
                <div className=" flex content-center items-center gap-3">
               <div> <img src={img2} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
                <div className=" flex content-center items-center gap-3">
               <div> <img src={img3} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
              </div>
            </SwiperSlide>
          <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1   lg:pb-72">
              <div className=" flex content-center items-center gap-3">
               <div> <img src={img1} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
                <div className=" flex content-center items-center gap-3">
               <div> <img src={img2} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
                <div className=" flex content-center items-center gap-3">
               <div> <img src={img3} alt="" className="lg:w-full"/></div>
                <div>
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                <div className="absolute lg:w-1/4 mt-3 shadow-md shadow-slate-400 lg:px-12 py-6">
                 <p>"I'm delighted with the solar installation from this company. Not only is our home now energy-efficient, but our electricity bills have significantly dropped. Great work!"</p>
                </div>
                </div>
                </div>
              </div>
            </SwiperSlide>
           
            
          </Swiper>
        </div>
        {/* Carousels */}
      </HomeContainer>
    </div>
  );
};

export default Testimonials;
