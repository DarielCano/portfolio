import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { useRef } from "react";
import "animate.css";
import "./NavBar.css";

const NavBar = ({ navBarBg }) => {
  const menu = useRef();

  const closeMenu = () => {
    menu.current.classList.toggle("active");
  };
  const handleMenu = () => {
    console.log("aqui");
    menu.current.classList.toggle("active");
  };

  return (
    <>
      <header className={navBarBg ? " header scrollBg " : "  header"}>
        <Link to="/" className="logo">
          <img
            className="header-logo"
            src="./logoPortfolio.png"
            alt="logo del portfolio"
          />
        </Link>

        <nav className="nav" ref={menu}>
          <ul onClick={closeMenu}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "is-active enlace" : "enlace"
                }
              >
                Inicio
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive ? "is-active enlace" : "enlace"
                }
              >
                Acerca
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={"/portfolio"}
                className={({ isActive }) =>
                  isActive ? "is-active enlace" : "enlace"
                }
              >
                PortFolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "is-active enlace" : "enlace"
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <AiOutlineMenu className="burger-btn" onClick={handleMenu} />
      </header>
    </>
  );
};

export default NavBar;
