import { useEffect, useState } from "react";

import "./PortFolioContainer.css";
import Project from "../Project/Project";
import "animate.css";
import Loader from "../Loader/Loader";

const PortFolioContainer = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/DarielCano/ApiProjects/db")
      /*  fetch("https://github.com/DarielCano/ApiProjects/blob/main/db.json") */
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data.proyectos);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="portfolio-container">
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="portfolio-container__content">
          <h2>Mis Proyectos</h2>
          <article className="portfolio-container__projects">
            {projects.map((proj) => {
              return <Project key={proj.id} project={proj} />;
            })}
          </article>
        </div>
      )}
    </section>
  );
};

export default PortFolioContainer;
