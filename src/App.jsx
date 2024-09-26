import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import NavBar from "./componant/navbar/NavBar";
import Home from "./componant/home/Home";
import AboutUs from "./componant/about/AboutUs";
import Services from "./componant/services/Services";
import ChooseUs from "./componant/chooseUs/ChooseUs";
import Contact from "./componant/contactUs/Contact";
import Footer from "./componant/footer/Footer";
import Buttons from "./componant/button/Buttons";
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <div
      className="app-container"
      dir={i18n.language === "ar" ? "arabic" : "english"}
    >
      <NavBar />
      <div className="container">
        <Home />
        <AboutUs />
        <Services />
        <ChooseUs />
        <Contact />
      </div>
      <Footer />
      <Buttons />
    </div>
  );
}

export default App;
