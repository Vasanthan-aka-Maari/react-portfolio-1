import React from "react";
import "./Projects.css";
import projects from "./projectsList";

function Projects() {
  console.log(projects);
  return (
    <div className="projects">
      <h1 className="title">My Works</h1>
      <div className="projects-container">
        {projects.map(({ id, img }) => (
          <div
            key={id}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
            }}
            className="project"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
