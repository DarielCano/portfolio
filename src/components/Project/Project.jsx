import "./Project.css";
import "animate.css";
const Project = ({ project }) => {
  return (
    <div className="project-container animate__animated animate__zoomIn">
      <div className="project-container__img">
        <img src={project?.src} alt={project.title} />
      </div>

      <div className="project-container__text">
        <h2>{project?.title}</h2>
        <p>{project?.description}</p>

        <a
          href={project?.link}
          className="btn btn-project"
          target="_blank"
          rel="noreferrer"
        >
          Ir al Sitio
        </a>
      </div>
    </div>
  );
};

export default Project;
