/* eslint-disable no-unused-vars */

import HomeContainer from "../../Container/HomeContainer";
import img from "../../assets/media/cover-photo.png";
import play from "../../assets/media/play.png";
const HomeCover = () => {
  return (
    <HomeContainer>
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <div>
          <p className="lg:text-5xl text-2xl font-bold">
            Switch to Solar Energy Today
          </p>
          <p className="lg:text-xl text-lg font-semibold">
            Save money and help the environment
          </p>
          <div className="flex gap-10 items-center lg:mt-14">
            <div>
              <p className="shadow-md rounded-md   py-3 px-2 lg:px-4 mt-3 text-center bg-sky-700 text-white font-bold lg:py-4 ">
                Get a Free Quote
              </p>
            </div>

            <div>
              <img src={play} alt="play btn" className="lg:w-full w-1/2" />
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
