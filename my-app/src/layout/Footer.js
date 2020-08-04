import React, { useState } from "react";
import "../styles/footer.scss";

const Footer = () => {
  const [style, setStyle] = useState("one");
  const handleClickCounter = () => {
    if (style === "one") {
      setStyle("two");
    } else {
      setStyle("one");
    }
  };

  if (style === "one") {
    return (
      <>
        <footer className="footer_styled">
          <button
            onClick={handleClickCounter}
            style={{ width: "50px", height: "30px", background: "black" }}
          >
            Style
          </button>
          <p>Created with fire and brimstone.</p>
        </footer>
      </>
    );
  } else if (style === "two") {
    return (
      <>
        <footer className="footer_styled_two">
          <button
            onClick={handleClickCounter}
            style={{ width: "50px", height: "30px", background: "black" }}
          >
            Style
          </button>
          <p>Created with fire and brimstone.</p>
        </footer>
      </>
    );
  }
};

export default Footer;
