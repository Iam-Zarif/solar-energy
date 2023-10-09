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
    <div className="bg-sky-50 mt-32 h-full py-12">
      
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
        <div className="mt-36 ">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1  lg:pb-20">
                <div className="flex mx-auto items-center gap-3">
                <img src={img1} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Grace Hall</div>
                    <div className="text-slate-700">Founder</div>
                </div>
                </div>
                <div className="mx-auto flex items-center gap-3">
                <img src={img2} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                </div>
                <div className="mx-auto flex items-center gap-3">
                <img src={img3} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Kira Wood</div>
                    <div className="text-slate-700">Customer</div>
                </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1  lg:pb-20">
                <div className="flex mx-auto items-center gap-3">
                <img src={img1} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Grace Hall</div>
                    <div className="text-slate-700">Founder</div>
                </div>
                </div>
                <div className="mx-auto flex items-center gap-3">
                <img src={img2} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                </div>
                <div className="mx-auto flex items-center gap-3">
                <img src={img3} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Kira Wood</div>
                    <div className="text-slate-700">Customer</div>
                </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1  lg:pb-20">
                <div className="flex mx-auto items-center gap-3">
                <img src={img1} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Grace Hall</div>
                    <div className="text-slate-700">Founder</div>
                </div>
                </div>
                <div className="mx-auto flex items-center gap-3">
                <img src={img2} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Connor Walker</div>
                    <div className="text-slate-700">Programmer</div>
                </div>
                </div>
                <div className="mx-auto flex items-center gap-3">
                <img src={img3} alt="" />
                <div>
                    <div className="text-xl text-sky-700 ">Kira Wood</div>
                    <div className="text-slate-700">Customer</div>
                </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
        {/* Carousels */}
      </HomeContainer>
    </div>
  );
};

export default Testimonials;
