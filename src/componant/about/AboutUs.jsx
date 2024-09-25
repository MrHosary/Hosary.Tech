import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./AboutUs.css"; // Make sure to include the CSS file for styling

const AboutUs = () => {
  const { t } = useTranslation();

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [cardRef1, cardInView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [cardRef2, cardInView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [cardRef3, cardInView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="about" className="about">
      {/* Animated Main Title */}
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="about-title"
      >
        {t("about.title")}
      </motion.h1>

      {/* Animated Text */}
      <motion.p
        ref={textRef}
        initial={{ opacity: 0, x: -100 }}
        animate={textInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.5 }}
        className="about-text"
      >
        {t("about.description")}
      </motion.p>

      {/* Animated Cards */}
      <div className="about-cards">
        {/* First Card */}
        <motion.div
          ref={cardRef1}
          className="about-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={cardInView1 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>{t("about.mission.title")}</h3>
          <p>{t("about.mission.description")}</p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          ref={cardRef2}
          className="about-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={cardInView2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>{t("about.vision.title")}</h3>
          <p>{t("about.vision.description")}</p>
        </motion.div>

        {/* Third Card */}
        <motion.div
          ref={cardRef3}
          className="about-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={cardInView3 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3>{t("about.values.title")}</h3>
          <p>{t("about.values.description")}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
