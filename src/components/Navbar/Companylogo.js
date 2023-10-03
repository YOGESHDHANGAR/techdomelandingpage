import React from "react";
import "./Companylogo.css";
import logo from "../../assets/logo.svg";

const Companylogo = () => {
  return (
    <div className="companylogo_main">
      <img className="logo_img" src={logo} />
    </div>
  );
};

export default Companylogo;
