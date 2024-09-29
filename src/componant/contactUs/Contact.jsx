import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  const form = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact-us");
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_acryz4s",
        "template_3pb8lv9",
        form.current,
        "1FBsbnV64xVq1vwbu"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();

          setNotification({
            show: true,
            message: t("contact.success"),
            type: "success",
          });
          setTimeout(() => {
            setNotification({ show: false, message: "", type: "" });
          }, 2000);
        },
        (error) => {
          console.log(error.text);

          setNotification({
            show: true,
            message: t("contact.failure"),
            type: "error",
          });
          setTimeout(() => {
            setNotification({ show: false, message: "", type: "" });
          }, 2000);
        }
      );
  };

  return (
    <div id="contact-us" className="contact-us-container">
      <motion.div
        className="contact-us-form"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <Row className="align-items-center">
          <Col xl={6}>
            <h1>{t("contact.title")}</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="off"
                />
                <label htmlFor="name">{t("contact.name")}</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="off"
                />
                <label htmlFor="email">{t("contact.email")}</label>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="off"
                />
                <label htmlFor="phone">{t("contact.phone")}</label>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
                <label htmlFor="message">{t("contact.message")}</label>
              </div>
              <button type="submit">{t("contact.send")}</button>
            </form>

            {/* notification */}
            {notification.show && (
              <motion.div
                className={`notification ${notification.type}`} // إضافة نوع الإشعار (نجاح أو خطأ)
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {notification.message}
              </motion.div>
            )}
          </Col>
          <Col xl={6}>
            <div className="contact-us-image">
              <img src="./image/كونتاكت اس.jpeg" alt="Contact Us" />
            </div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Contact;
