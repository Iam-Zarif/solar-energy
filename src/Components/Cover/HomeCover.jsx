/* eslint-disable no-unused-vars */
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import { AwesomeButton } from "react-awesome-button";
import HomeContainer from "../../Container/HomeContainer";
import img from "../../assets/media/cover-photo.png";
import play from "../../assets/media/play.png";
import React from 'react';
import VideoModal from './VideoModal';

const HomeCover = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <HomeContainer>
      <VideoModal open={open} handleClose={handleClose} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"/>
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <div>
          <p className="lg:text-5xl text-2xl font-bold">
            Switch to Solar Energy Today
          </p>
          <p className="lg:text-xl text-lg font-semibold">
            Save money and help the environment
          </p>
          <div className="flex gap-10 items-center lg:mt-14">
            <div className="text-2xl">
              <AwesomeButton  cssModule={AwesomeButtonStyles} className="">
              
               <span className="text-xl"> Get a Free Quote</span>
              
              </AwesomeButton>
            </div>
{/*  */}

      
{/*  */}
            <div>
              <img onClick={handleOpen} src={play} alt="play btn" className="cursor-pointer lg:w-full w-1/2" />

            </div>
          </div>
        </div>

        {/* Photo */}
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomeCover;
