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

        <div className="project-links">
          <a
            href={project?.link}
            className="link-site"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              style={{ fill: "transparent" }}
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-external-link"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#e1d111"
              fill="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
              <path d="M11 13l9 -9" />
              <path d="M15 4h5v5" />
            </svg>
          </a>

          <a
            href={project?.gitLink}
            className="link-site"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              style={{ fill: "transparent" }}
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#e1d111"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
