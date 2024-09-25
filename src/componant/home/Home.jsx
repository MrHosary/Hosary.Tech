import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();

  const slidesData = [
    {
      title: t("home.title1"),
      subtitle: t("home.subtitle1"),
      image: "./image/دعنا.png",
    },
    {
      title: t("home.title2"),
      subtitle: t("home.subtitle2"),
      image: "./image/افكار.png",
    },
    {
      title: t("home.title3"),
      subtitle: t("home.subtitle3"),
      image: "./image/ابنكار.png",
    },
  ];

  return (
    <Container id="home" className="home-container">
      <Carousel interval={3000} controls={false} indicators={false}>
        {slidesData.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row className="align-items-center flex-column-reverse flex-md-row">
              <Col md={6}>
                <div className="text-container">
                  <motion.h1
                    className="home-title"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="home-subtitle"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.a
                    href="#contact-us"
                    className="contact-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {t("home.contactButton")}
                  </motion.a>
                </div>
              </Col>

              <Col md={6}>
                <motion.img
                  className="d-block w-100 home-image"
                  src={slide.image}
                  alt={`Slide ${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Home;
