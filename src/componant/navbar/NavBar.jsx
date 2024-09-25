import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./NavBar.css";
import LanguageSwitcher from "../language/LanguageSwitcher ";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a href="#contact-us" onClick={closeMenu}>
              {t("navbar.contact")}
            </a>
          </li>
          <LanguageSwitcher closeMenu={closeMenu} />
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="logo">
          <img src="./image/logo1.png" alt="Logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
