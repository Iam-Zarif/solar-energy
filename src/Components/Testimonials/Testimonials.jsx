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
import { useEffect } from "react";
import DynamicTestimonials1 from "./DynamicTestimonials1";

const Testimonials = () => {
  const [UserInfo, setUserInfo] = useState([]);
    useEffect(() => {
      fetch("http://localhost:2000/userInfo")
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
          console.log(data);
        });
    }, []);
    
     UserInfo.map((userInfo) => {<img src={userInfo?.image} key={userInfo._id}></img>
  
  });
    
  const [feedbacks, setfeedbacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/feedback")
      .then((res) => res.json())
      .then((data) => {
        setfeedbacks(data);
        console.log(data);
      });
  }, []);

  return (
    <div className=" mt-32 h-full py-12 ">
      
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

             {feedbacks.slice(0, 3).map((Feedback) =>{
              return(
                <DynamicTestimonials1 key={Feedback._id} Feedback={Feedback}/>
              )
             })}

               
               
              </div>
            </SwiperSlide>
          <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1   lg:pb-72">

             {feedbacks.slice(3, 6).map((Feedback) =>{
              return(
                <DynamicTestimonials1 UserInfo={UserInfo} key={Feedback._id} Feedback={Feedback}/>
              )
             })}

               
               
              </div>
            </SwiperSlide>
          
            <SwiperSlide>
              <div className="grid lg:grid-cols-3 grid-cols-1   lg:pb-72">

             {feedbacks.slice(6, 9).map((Feedback) =>{
              return(
                <DynamicTestimonials1 key={Feedback._id} Feedback={Feedback}/>
              )
             })}

               
               
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
