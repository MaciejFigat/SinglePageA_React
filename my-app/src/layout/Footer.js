import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer_styled">
        <p>
          MTF © {new Date().getFullYear()}, Built with &#160;
          <a className="reactLink" href="https://reactjs.org/">
            React
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
