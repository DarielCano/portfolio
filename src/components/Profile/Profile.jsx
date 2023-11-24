import "./Profile.css";
import rostroImg from "../../assets/rostro.jpeg";
import "animate.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <section className="profile-info animate__animated animate__fadeInLeft ">
        <div className="profile-name">
          <h2>Dariel Cano González</h2>
          <small>Desarrollador FrontEnd</small>
        </div>
        <article className="profile-aboutme">
          <p>
            Hola, soy <span>Dariel</span>. Tengo una licenciatura en{" "}
            <span>Ingeniería en Telecomunicaciones y Electrónica</span> en la
            Universidad Central `Marta Abreu` de Las Villas en Cuba, además de
            tener una
            <span> Maestría en Ciencias en Ingeniería Electrónica</span> en el
            Tecnológico Nacional de México en Celaya. Soy un apasionado de la
            programación web y me encuentro en constante aprendizaje y
            actualización de conocimientos.
          </p>
          <p>
            Te puedo ayudar a crear tus aplicaciones web ya sea con{" "}
            <span>HTML, CSS(SASS) y Javascript</span> o a través de la librería{" "}
            <span>React Js</span>. También trabajo con frameworks como{" "}
            <span>Bootstrap</span> para los estilos y con herramientas de
            desarrollo como <span>Git y GitHub</span>, y para el deploy de
            proyectos creados en los repositorios a través de{" "}
            <span>GitHub-Pages y Vercel</span> . En lo referente al backend
            tengo conocimientos en la creación de api-REST con{" "}
            <span>Node JS</span> y <span>MongoDB</span> y el manejo de la api de
            <span>Google Firebase</span> para el desarrollo de aplicaciones web.
          </p>

          <p>
            Actualmente resido en Guanajuato, Guanajuato, México y me encuentro
            constantemente realizando proyectos y aplicaciones de tipo blog,
            e-commerce. Ademas de sistemas de gestion de usuarios con manejo de
            APIs y Bases de Datos a modo de seguirme superando. En lo que te
            pueda apoyar no dudes en contactarme.
          </p>
        </article>
        <a
          href="https://drive.google.com/file/d/1tTkd27bLXFh6M9vCI3uco_lMszwkZcl6/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="btn btn-cv"
        >
          Mi CV
        </a>
      </section>
      <section className="profile-img animate__animated  animate__fadeIn">
        <img src={rostroImg} alt="foto Dariel" />
      </section>
      <section className="profile-habilities animate__animated animate__fadeInRight ">
        <h2>Mis tecnologías</h2>
        <div className="profile-habilities-icons">
          <div className="hab-icon">
            <img src="./icons/HTML5_Logo_512.png" alt="logo html5" />
          </div>
          <div className="hab-icon">
            <img src="./icons/css.png" alt="logo css" />
          </div>
          <div className="hab-icon js">
            <img src="./icons/javascript-logo.png" alt="logo JavaScript" />
          </div>
          <div className="hab-icon">
            <img src="./icons/sass.png" alt="logo Sass" />
          </div>
          <div className="hab-icon">
            <img src="./icons/Bootstrap_logo.svg.png" alt="logo Bootstrap" />
          </div>
          <div className="hab-icon">
            <img src="./icons/React.svg.png" alt="logo React" />
          </div>

          <div className="hab-icon">
            <img src="./icons/nodejs.png" alt="logo nodeJS" />
          </div>
          <div className="hab-icon">
            <img src="./icons/mongoDB.png" alt="logo mongoDB" />
          </div>

          <div className="hab-icon">
            <img src="./icons/git.png" alt="logo git" />
          </div>
          <div className="hab-icon">
            <img src="./icons/github.png" alt="logo github" />
          </div>
          <div className="hab-icon">
            <img src="./icons/firebase.png" alt="logo firebase" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
