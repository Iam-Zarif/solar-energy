import HomeContainer from "../../Container/HomeContainer";
import logo from "../../assets/media/logo.png";
import fb from "../../assets/media/facebook.png";
import insta from "../../assets/media/instagram.png";
import linkedin from "../../assets/media/linkedin.png";

const HomeFooter = () => {
  return (
    <div className="bg-sky-50 mt-28 pt-20 pb-10">
      <HomeContainer>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col">
            <div>
              <img src={logo} alt="" className="" />{" "}
            </div>
            <p className="mt-5 font-bold text-slate-500">
              We are a reliable and experienced solar company that offers
              affordable and sustainable energy solutions, customized to fit
              your unique needs.{" "}
            </p>
            <div className="flex gap-3 mt-2">
              <img src={fb} alt="" />
              <img src={insta} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="mx-auto">
              <p className="text-xl font-bold">Links</p>
              <div className="font-semibold text-slate-600">
                <p>Home</p>
              <p>Commercial Solar</p>
              <p>Residential Solar</p>
              <p>Contact Us</p>
              </div>
            </div>
            <div className="mx-auto">
              <p className="text-xl font-bold">Services</p>
              <div className="font-semibold text-slate-600">
                <p>Solar System Design</p>
              <p>Procurement</p>
              <p>Solar Panel Installations</p>
              <p>Operations and Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </HomeContainer>
      <div>
        <hr className="mt-10 "/>
        <div>
            <p className="font-semibold text-slate-500 text-center">Copyright © 2023  All right policy reserved</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
