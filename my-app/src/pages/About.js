import React from "react";
import { Layout } from "../layout";
import "../styles/about.scss";

const About = () => {
  return (
    <Layout>
      <div className="div_wrapper_about">
        <div className="div_container one">
          <div className="div_one"></div>
        </div>
        <div className="div_container two">
          <div className="div_one"></div>
          <div className="div_two"></div>
        </div>
        <div className="div_container three">
          <div className="div_one"></div>
          <div className="div_two"></div>
          <div className="div_three"></div>
        </div>
        <div className="div_container four">
          <div className="div_three"></div>
        </div>
        <div className="div_container five">
          <div className="div_two"></div>
          <div className="div_three"></div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
