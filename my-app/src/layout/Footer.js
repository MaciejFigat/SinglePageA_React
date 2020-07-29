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
        <button
          onClick={handleClickCounter}
          style={{ width: "100px", height: "100px" }}
        >
          Style
        </button>
        <footer className="footer_styled">
          Created with fire and brimstone.
        </footer>
      </>
    );
  } else if (style === "two") {
    return (
      <>
        <button
          onClick={handleClickCounter}
          style={{ width: "100px", height: "100px" }}
        >
          Style
        </button>
        <footer className="footer_styled_two">
          Created with fire and brimstone.
        </footer>
      </>
    );
  }
};

export default Footer;
