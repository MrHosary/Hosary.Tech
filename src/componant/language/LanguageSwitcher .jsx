import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import PropTypes from "prop-types";

const LanguageSwitcher = ({ closeMenu }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);

    // Store the selected language in local storage
    localStorage.setItem("i18nextLng", selectedLanguage);

    // Reload the page to apply language changes
    window.location.reload();

    closeMenu();
  };

  return (
    <div className="language-switcher">
      <select
        value={i18n.language}
        onChange={handleChangeLanguage}
        className="language-select"
      >
        <option value="en">En</option>
        <option value="ar">Ar</option>
        <option value="he">He</option> 
      </select>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default LanguageSwitcher;
