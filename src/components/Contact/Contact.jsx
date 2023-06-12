import logoGitHub from "../../../public/icons/social/github-mark.svg";
import logoLinkedin from "../../../public/icons/social/linkedin-svgrepo-com.svg";
import logoWhatsApp from "../../../public/icons/social/whatsapp-svgrepo-com.svg";
import "animate.css";
import "./Contact.css";
import useForm from "../../hooks/useForm";
import { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import { BiHappyAlt } from "react-icons/bi";
import emailjs from "@emailjs/browser";

const validationForm = (form) => {
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let errors = { name: false, email: false, comments: false };

  if (form.name == "") {
    errors.name = true;
  }

  if (form.email == "") {
    errors.email = true;
  } else if (regexEmail.test(form.email.trim()) == false) {
    errors.email = true;
  }

  if (form.comments == "") {
    errors.comments = true;
  }
  return errors;
};

const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    comments: "",
  };

  const { form, handleChange, setForm } = useForm(initialForm);
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  /////////////////////////////////////////////////////////////////////////
  const myForm = useRef();

  ///////////////////////////////////////////////////////////////////

  const sendMyForm = (e) => {
    e.preventDefault();
    let errors = validationForm(form);
    if (
      errors.name == false &&
      errors.comments == false &&
      errors.email == false
    ) {
      emailjs
        .sendForm(
          "service_jqh5phl",
          "template_v436sb6",
          myForm.current,
          "OPrAo-TUzCdQEaWPc"
        )
        .then(
          () => {
            setForm(initialForm);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setIsOpen(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <section className="modal-content">
          <h2>Gracias por tus comentarios!</h2>
          <p>En breve te respondo</p>
          <BiHappyAlt className="modal-content__icon" />
        </section>
      </Modal>
      <div className="container">
        <p className="contact-intro animate__animated animate__backInDown">
          Si necesitas conocer de mis proyectos, o contactarme para apoyarte o
          simplemente para saludar, escríbeme al correo
          <a href="mailto:dariel.cano1992@gmail.com?subject=Necesito%20ayuda">
            : dariel.cano1992@gmail.com
          </a>
        </p>

        <form
          ref={myForm}
          onSubmit={(e) => sendMyForm(e)}
          className="contact-form animate__animated animate__fadeIn animate__delay-2s"
        >
          <section className="contact-form__inputs">
            <input
              onChange={handleChange}
              onClick={() => setErrors({})}
              className={
                errors.name ? "contact-input contact-error" : "contact-input "
              }
              type="text"
              name="name"
              id="name"
              placeholder="Escribe tu nombre"
              value={form.name}
            />
            <input
              onChange={handleChange}
              onClick={() => setErrors({})}
              className={
                errors.email ? "contact-input contact-error" : "contact-input "
              }
              type="email"
              name="email"
              id="email"
              placeholder="Escribe tu correo"
              value={form.email}
            />
          </section>

          <textarea
            className={
              errors.comments
                ? "contact-form__textarea contact-error-text"
                : "contact-form__textarea"
            }
            onChange={handleChange}
            onClick={() => setErrors({})}
            name="comments"
            id="comments"
            placeholder="Escribe tus comentarios"
            cols="30"
            rows="10"
            value={form.comments}
          />
          <input
            className="btn contact-form__btn"
            type="submit"
            name="message"
            value="Enviar mensaje"
          />
        </form>
        <section className="contact-social animate__animated animate__fadeInUpBig animate__delay-2s ">
          <a
            href="https://github.com/DarielCano"
            target="_blank"
            rel="noreferrer"
            className="contact-social__link firstLogo"
          >
            <img src={logoGitHub} alt="logo de github" />
            <h3>GitHub</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/dariel-cano-gonz%C3%A1lez-814074217/"
            target="_blank"
            rel="noreferrer"
            className="contact-social__link secondLogo"
          >
            <img src={logoLinkedin} alt="logo de linkedin" />
            <h3>LinkedIn</h3>
          </a>
          <a
            href="https://wa.me/+524613904575?text=Hola, estoy interesado en sus servicios. Necesito ..."
            target="_blank"
            rel="noreferrer"
            className="contact-social__link thirdLogo"
          >
            <img src={logoWhatsApp} alt="logo de whatsApp" />
            <h3>WhatsApp</h3>
          </a>
        </section>
      </div>
    </>
  );
};

export default Contact;
