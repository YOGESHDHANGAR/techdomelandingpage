import React from "react";
import "./BottomBanner.css";
import bottombannertaglineimage from "../../assets/bottombannertaglineimage.png";
import { Link } from "react-router-dom";

const BottomBanner = () => {
  return (
    <div className="bottombanner_section section">
      <img
        className="bottombannertaglineimage"
        src={bottombannertaglineimage}
      />
      <h3 className="tag">
        Starting small, building big and— <br /> everything in between
      </h3>
      <Link
        className="letstalk_navlink_in_bottom_banner navlink"
        to="/letstalk"
      >
        <div className="lets_talk_button_in_bottom_banner">Let's Talk</div>
      </Link>
    </div>
  );
};

export default BottomBanner;
