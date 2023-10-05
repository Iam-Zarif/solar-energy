import HomeContainer from "../../Container/HomeContainer";

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
        <p className="shadow-md rounded-md   py-3 px-2 lg:px-4 mt-3 text-center bg-sky-700 text-white font-bold lg:py-4 ">
                Get a Free Quote
              </p>
        </div>
      </div>
    </HomeContainer>
  );
};

export default UnderCover;
