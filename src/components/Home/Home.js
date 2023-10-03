import React from "react";
import "./Home.css";
import Techs from "./Techs";
import WhyTechdome from "./WhyTechdome";
import Serve from "./Serve";
import Shaping from "./Shaping";
import Clients from "./Clients";
import BottomBanner from "./BottomBanner";

const Home = () => {
  return (
    <div className="home_main">
      <div className="banner">
        <p className="banner_title">PLAN</p>
        <p className="banner_title">BUILD</p>
        <p className="banner_title">EXPAND</p>
        <p className="banner_text">
          STARTING OR SCALING TECHDOME MAKES IT EASIER
        </p>
      </div>
      <Techs
        tagline1="Empowering Businesses, Empowering You"
        tagline2="Technology Made Simple"
      />
      <WhyTechdome tagline1="Why choose" tagline2="Techdome" />
      <Serve tagline1="WHAT WE DO AS" tagline2="EXPERTS" />
      <Shaping tagline1="Shaping Tomorrow." tagline2="Industry." />
      <Clients tagline1="Client Success." tagline2="Guaranteed." />
      <BottomBanner />
    </div>
  );
};

export default Home;
