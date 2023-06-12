import "./Project.css";
import "animate.css";
const Project = ({ project }) => {
  return (
    <a
      href={project?.link}
      target="_blank"
      rel="noreferrer"
      className="project-container animate__animated animate__zoomIn"
    >
      <div className="project-container__img">
        <img src={project?.src} alt={project.title} />
      </div>

      <div className="project-container__text">
        <h2>{project?.title}</h2>
        <p>{project?.description}</p>
      </div>
    </a>
  );
};

export default Project;
