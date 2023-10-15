/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { AiOutlineCheckCircle, AiOutlineMail } from "react-icons/ai";
import HomeContainer from "../../Container/HomeContainer";
import { Tooltip } from "react-tooltip";
import {RxCross1} from "react-icons/rx"
import InfoTabs from "./InfoTabs";
import { useState } from "react";
import { useEffect } from "react";

const Infos = ({User}) => {
    const [UserInfo, setUserInfo] = useState("");
    useEffect(() => {
      fetch("http://localhost:2000/userInfo")
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
          console.log(data);
        });
    }, []);

    console.log(UserInfo)
    
    return (
        <HomeContainer>
            <div className="pt-36 flex gap-5">
                <img src={User?.photoURL} alt="" className="lg:w-40 rounded-full"/>
                <div><p className="text-4xl font-semibold name">{User?.displayName}</p>
             <Tooltip id="my-tooltip" />
                <p 
                 data-tooltip-id="my-tooltip"
                  data-tooltip-content="Click on mail"
                  className="text-xl flex gap-2"><span className="flex items-center gap-1"><AiOutlineMail/> <span>EMAIL:</span> </span><span className="name"><a href={`mailto:${User?.email}`}>{User?.email}</a></span></p>
                 <div className="flex text-xl  gap-2">
                 <p>Email Verification: </p>
               <p>
                {
                    User?.emailVerified === true  ? <><p className="shadow rounded-xl px-3 py-0.5 bg-green-500 text-white pb-1 flex items-center gap-1"><AiOutlineCheckCircle/> <span>Yes</span></p></>
                    :
                    <><p className="shadow rounded-xl px-3 py-0.5 bg-red-500 text-white pb-1 flex items-center gap-1"><RxCross1/> <span>No</span></p></>
                }
               </p>
             
                 </div>
                </div>
                
            </div>

            <div>
                <InfoTabs/>
            </div>
            
        </HomeContainer>
    );
};

export default Infos;