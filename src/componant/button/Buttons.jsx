import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Buttons.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Buttons = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <>
      <div className="whatsapp-button">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+972544860306" // Replace with your WhatsApp number
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      {/* Back to Top Button */}
      <div className="back-to-top-container">
        <div
          className={`back-to-top ${showScroll ? "show" : ""}`}
          onClick={scrollTop}
        >
          <MdKeyboardDoubleArrowUp />
        </div>
      </div>
    </>
  );
};

export default Buttons;
