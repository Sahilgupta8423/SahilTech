import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/chris-liverani-NDfqqq_7QWM-unsplash.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      ></Common>
    </>
  );
};
export default About;
