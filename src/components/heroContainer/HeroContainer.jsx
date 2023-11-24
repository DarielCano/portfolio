import { FiArrowRight } from "react-icons/fi";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./HeroContainer.css";
import "animate.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HeroContainer = () => {
  return (
    <>
      <SocialLinks />
      <div className="hero-container">
        <h1 className="hero-intro">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                /*    .pauseFor(500) */
                .typeString("Hola, mi nombre es Dariel. ")
                /*  .pauseFor(50) */
                .typeString(" Soy desarrollador FrontEnd ")
                .start();
            }}
          />
        </h1>

        <Link
          to="/contact"
          className=" animate__animated animate__fadeIn animate__delay-4s btn btn-ct "
        >
          <span>Contáctame</span> <FiArrowRight className="arrow" />
        </Link>
      </div>
    </>
  );
};

export default HeroContainer;
