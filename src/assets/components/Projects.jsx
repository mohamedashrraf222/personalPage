import Project from "./projectComp";
import myProjects from "./../../../public/projects";
import "../styles/projects.css";

const Projects = () => {
  return (
    <>
      <div className="container" id="projects">
        <div className="skills">
          <h1>
            web apps <i className="fa-brands fa-medapps"></i>
          </h1>
          <div className="project-card-container show">
            {myProjects.map((project) => {
              return <Project data={project} key={project.key} type="app" />;
            })}
          </div>
        </div>
        {/* <div className="skills">
          <h1>
            Static Projects <i className="fa-solid fa-earth-americas"></i>
          </h1>
          <div className="project-card-container show">
            {myProjects.map((project) => {
              return (
                <Project data={project} key={project.key} type="project" />
              );
            })}
          </div>
        </div> */}
      </div>

    </>
  );
};

export default Projects;
