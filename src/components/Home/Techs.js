import React from "react";
import "./Techs.css";
import { Link } from "react-router-dom";
import forStartupsImage from "../../assets/forStartupsImage.webp";

const Techs = (props) => {
  return (
    <div className="techs_main section">
      <p className="tagline1 tagline">{props.tagline1}</p>
      <p className="tagline2 tagline">{props.tagline2}</p>
      <div className="techs_content content">
        <div className="page_refer">
          <img className="for_startups_image" src={forStartupsImage} />
          <div className="startups_heading_and_description">
            <h1 className="heading">For Startups</h1>
            <p className="description">
              Techdome provides empowering resources to the next generation of
              unicorns to help bring their ideas to life. Join Techdome’s
              vibrant community of entrepreneurs and let’s execute your ideas.
            </p>
            <Link className="link_to_industries" to="/industries">
              Build Your Ideas
            </Link>
          </div>
        </div>
        <div className="page_refer">
          <div className="enterprises_heading_and_description">
            <h1 className="heading">For Enterprises</h1>
            <p className="description">
              Techdome’s business processes are designed to increase efficiency,
              drive growth and help organizations, like yours, transform their
              operations and reach new heights. Join us and scale your future,
              exponentially!
            </p>
            <Link className="link_to_industries" to="/industries">
              Build Your Future
            </Link>
          </div>
          <img className="for_enterprises_image" src={forStartupsImage} />
        </div>
      </div>
    </div>
  );
};

export default Techs;
