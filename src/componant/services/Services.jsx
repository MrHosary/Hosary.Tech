import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import { useTranslation } from "react-i18next";

const servicesData = [
  {
    image: "./image/مواقع إلكترونية.gif",
    key: "service1",
  },
  {
    image: "./image/متاجر إلكترونية.gif",
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

const Services = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="services" className="services-container">
      <h1 className="title">{t("services.title")}</h1>

      <div className="services-box">
        <Slider {...settings}>
          {servicesData.map((service, index) => (
            <div key={index} className="services-box-img">
              <div className="service-content">
                <img src={service.image} alt={`service-${index}`} />
                <h3 className="service-title">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="service-description">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
