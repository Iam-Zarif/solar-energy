/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import ProjectsCard from "./ProjectsCard";

const RsProjects = () => {
  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 ">
      {Projects.map((project) => {
        return <ProjectsCard key={project._id} project={project}></ProjectsCard>;
      })}
    </div>
  );
};

export default RsProjects;
