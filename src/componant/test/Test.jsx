import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Test.css";
import { useTranslation } from "react-i18next";

const servicesData = [
  {
    image: "./image/تصميم بدون عنوان.gif",
    key: "service1",
  },
  {
    image: "public/image/متاجر إلكترونية.gif",
    key: "service2",
  },
  {
    image: "./image/بناء تطبيقات.gif",
    key: "service3",
  },
  {
    image: "./image/تسويق وإدارة.gif",
    key: "service4",
  },
];

const Test = () => {
  const { t } = useTranslation();
  return (
    <div className="services-section">
      <h2 className="services-title">خدماتنا</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => {
          // استخدم useInView لكل كارد
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="service-details">
                <h3 className="service-title">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="service-description">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
