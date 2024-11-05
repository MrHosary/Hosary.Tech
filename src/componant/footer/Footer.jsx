import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <img src="./image/logo2.jpeg" alt="logo" />
        </div>
        <div className="footer-section">
          <h3>{t("footer.contact")}</h3>
          <p>
            <MdAttachEmail /> :{" "}
            <a href="mailto:hosary.tech@gmail.com">hosary.tech@gmail.com</a>
          </p>
          <p>
            <FaPhoneAlt /> :{" "}
            <a href="tel:+972544860306" className="phone">
              +972 544 860 306
            </a>
          </p>
        </div>

        <div className="footer-section social-media">
          <h3>{t("footer.followUs")}</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 {t("footer.copyright")}.</p>
      </div>
    </footer>
  );
};

export default Footer;
