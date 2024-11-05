import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FcVoicemail, FcApproval, FcGlobe } from "react-icons/fc";

import "./ChooseUs.css";

const ChooseUs = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("why-us");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="why-us" className="why-us-container">
      <motion.div
        className="why-us-content"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="title">{t("chooseUs.title")}</h1>
        <p>{t("chooseUs.description")}</p>
      </motion.div>

      <motion.div
        className="why-us-card"
        initial={{ opacity: 0, x: "100vw" }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="content">
          <FcVoicemail className="icon" />
          {/* <FcWorkflow className="icon" /> */}
          <h5>{t("chooseUs.card1")}</h5>
        </div>

        <div className="content">
          <FcGlobe className="icon" />
          <h5>{t("chooseUs.card2")}</h5>
        </div>
        <div className="content">
          <FcApproval className="icon" />
          <h5>{t("chooseUs.card3")}</h5>
        </div>
      </motion.div>
    </div>
  );
};

export default ChooseUs;
