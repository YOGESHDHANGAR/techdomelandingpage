import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Companylogo from "./Companylogo";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="navbar_main">
      <Link className="home_navlink navlink" to="/">
        <Companylogo />
      </Link>
      <div className="middle_navlinks">
        <div
          onMouseEnter={toggleDropdown}
          onMouseLeave={handleMouseLeave}
          className="service_dropdown navlink"
        >
          Services
          {isDropdownOpen && (
            <ul className="service_dropdown_menu">
              <li className="service_dropdown_item">
                <Link
                  className="service_dropdown_item_link"
                  to="/cloudandautomation"
                >
                  Cloud & Automation
                </Link>
              </li>
              <li className="service_dropdown_item">
                <Link
                  className="service_dropdown_item_link"
                  to="/businessanylitics"
                >
                  Business Analytics
                </Link>
              </li>
              <li className="service_dropdown_item">
                <Link
                  className="service_dropdown_item_link"
                  to="/blockchainandcrypto"
                >
                  Blockchain and Cryto
                </Link>
              </li>
              <li className="service_dropdown_item">
                <Link
                  className="service_dropdown_item_link"
                  to="/unicornsoftomorrow"
                >
                  Unicorns of Tomorrow
                </Link>
              </li>
              <li className="service_dropdown_item">
                <Link
                  className="service_dropdown_item_link"
                  to="/applicationdevelopment"
                >
                  Application Development
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link className="industries_navlink navlink" to="/industries">
          Industries
        </Link>
        <Link className="resources_navlink navlink" to="/resources">
          Resources
        </Link>
        <Link className="about_navlink navlink" to="/about">
          About
        </Link>
        <Link className="career_navlink navlink" to="/career">
          Career
        </Link>
      </div>
      <Link className="letstalk_navlink navlink" to="/letstalk">
        <div className="lets_talk_button">Let's Talk</div>
      </Link>
    </div>
  );
};

export default Navbar;
