import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      ></Common>
    </>
  );
};
export default Home;
