import "./Profile.css";
import rostroImg from "../../assets/rostro.png";
import "animate.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <section className="profile-info animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="profile-name">
          <h2>Dariel Cano González</h2>
          <small>Desarrollador FrontEnd</small>
        </div>
        <article className="profile-aboutme">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos
            aliquid, ducimus quas tempore atque dicta repudiandae nam.
            Praesentium cupiditate itaque quasi voluptate tempora numquam soluta
            officiis pariatur obcaecati officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos
            aliquid, ducimus quas tempore atque dicta repudiandae nam.
            Praesentium cupiditate itaque quasi voluptate tempora numquam soluta
            officiis pariatur obcaecati officia.
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
      <section className="profile-habilities animate__animated animate__fadeInRight animate__delay-1s">
        <h2>Mis tecnologías</h2>
        <div className="profile-habilities-icons">
          <div className="hab-icon">
            <img src="../public/icons/HTML5_Logo_512.png" alt="logo html5" />
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
