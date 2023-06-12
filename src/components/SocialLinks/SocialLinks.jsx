import "./SocialLinks.css";
import logoGitHub from "../../../public/icons/social/github-mark.svg";
import logoLinkedin from "../../../public/icons/social/linkedin-svgrepo-com.svg";
import logoWhatsApp from "../../../public/icons/social/whatsapp-svgrepo-com.svg";
import "animate.css";
const SocialLinks = () => {
  return (
    <div className="links-container ">
      <a
        href="https://github.com/DarielCano"
        target="_blank"
        rel="noreferrer"
        className="link github animate__animated animate__fadeIn animate__delay-2s"
      >
        <img src={logoGitHub} alt="logo github" />
      </a>
      <a
        href="https://www.linkedin.com/in/dariel-cano-gonz%C3%A1lez-814074217/"
        target="_blank"
        rel="noreferrer"
        className="link linkedin animate__animated animate__fadeIn animate__delay-2s"
      >
        <img src={logoLinkedin} alt="logo linkedin" />
      </a>
      <a
        href="https://wa.me/+524613904575?text=Hola, estoy interesado en sus servicios. Necesito ..."
        target="_blank"
        rel="noreferrer"
        className="link whatsapp animate__animated animate__fadeIn animate__delay-2s"
      >
        <img src={logoWhatsApp} alt="logo whatsapp" />
      </a>
    </div>
  );
};

export default SocialLinks;
