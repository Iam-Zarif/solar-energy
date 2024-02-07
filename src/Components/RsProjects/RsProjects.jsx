/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import ProjectsCard from "./ProjectsCard";
import HomeContainer from "../../Container/HomeContainer";

const RsProjects = () => {
  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://solar-panel-server-ecjps02r4-iam-zarif.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);
  return (
   <HomeContainer>
    <div className="mt-32">
      <p className="text-lg font-bold text-sky-700  text-center">Our Portfolio</p>
      <p className="lg:text-5xl font-bold text-center" >Our Successive Projects </p>
    </div>
    <div className="lg:mt-12 grid lg:grid-cols-3 grid-cols-1 lg:gap-10">
   {Projects.map((project) => {
     return (<ProjectsCard key={project?._id} project={project}></ProjectsCard>);
   })}
 </div></HomeContainer>
  );
};

export default RsProjects;
