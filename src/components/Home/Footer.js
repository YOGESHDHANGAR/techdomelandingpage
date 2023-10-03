import React from "react";
import "./Footer.css";
import footersocialsectionimage from "../../assets/footersocialsectionimage.png";
import { Link } from "react-router-dom";

const footerLinksData = [
  {
    heading: "Services",
    links: [
      "Cloud Automations",
      "Business and Analytics",
      "Blockchain and Crypto",
      "Unicorns of Tomorrow",
      "Application Development",
    ],
  },
  {
    heading: "Industries",
    links: [
      "Fintech",
      "HealthCare",
      "Manufacturing",
      "Insurance",
      "Pet Hospitality",
    ],
  },
  {
    heading: "Resources",
    links: ["Blogs", "News Articles"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Contact Us"],
  },
];

const FooterBox = (props) => {
  return (
    <div className="footerbox_main">
      <h3 className="heading">{props.elem.heading}</h3>
      {props.elem.links.map((link) => (
        <p className="footer_link">{link}</p>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="content">
        <div className="footer_navlinks">
          {footerLinksData.map((elem) => (
            <FooterBox elem={elem} />
          ))}
        </div>
        <div className="footer_social_navlinks">
          <div className="footer_tag_div">
            <img src={footersocialsectionimage} />
            <p className="description">
              The one stop solution base. Plan, build, design, develop and
              launch with Techdome. Get quality expertise, top-notch resources,
              personalized solutions and more…
            </p>
          </div>
          <div className="footer_social_sites_links_div">
            <Link
              className="navlink"
              to="https://www.linkedin.com/company/techdome-solutions/"
            >
              Linkdin
            </Link>
            <Link
              className="navlink"
              to="https://www.facebook.com/groups/techdomesolutions"
            >
              Facebook
            </Link>
            <Link className="navlink" to="https://twitter.com/techdomesolves">
              Twitter
            </Link>
            <Link
              className="navlink"
              to="https://www.youtube.com/@techdomesolutions"
            >
              Youtube
            </Link>
            <Link
              className="navlink"
              to="https://www.instagram.com/techdome.io/"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className="footer_copyright">
          <p>© Copyright 2023 techdome | All Rights Reserved</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
