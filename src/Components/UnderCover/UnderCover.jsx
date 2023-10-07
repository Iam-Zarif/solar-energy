import { AwesomeButton } from "react-awesome-button";
import HomeContainer from "../../Container/HomeContainer";
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
const UnderCover = () => {
  return (
    <HomeContainer>
      <div className="flex lg:flex-row flex-col mx-auto justify-around shadow-md rounded-md items-center">
        <div>
          <p className="text-sky-700 font-bold">Name</p>
          <p className="text-slate-600 font-semibold">Solar</p>
        </div>
        <div>
        <p className="text-sky-700 font-bold">Email</p>
          <p className="text-slate-600 font-semibold">solar@gmail.com</p>
        </div>
        <div>
        <p className="text-sky-700 font-bold">Solar capacity</p>
          <p className="text-slate-600 font-semibold">6 Kw</p>
        </div>
        <div>
        <div className="text-2xl">
              <AwesomeButton  cssModule={AwesomeButtonStyles} className="">
              
               <span className="text-xl"> Get a Free Quote</span>
              
              </AwesomeButton>
            </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default UnderCover;
