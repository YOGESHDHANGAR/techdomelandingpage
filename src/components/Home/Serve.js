import React from "react";
import "./Serve.css";
import svg1 from "../../assets/svg1.webp";

const services = [
  {
    iconImage: svg1,
    serviceName: "CLOUND AND AUTOMATION",
  },
  {
    iconImage: svg1,
    serviceName: "tagline",
  },
  {
    iconImage: svg1,
    serviceName: "BUSINESS ANALYTICS",
  },
  {
    iconImage: svg1,
    serviceName: "BLOCKCHAIN AND CRYPTO",
  },
  {
    iconImage: svg1,
    serviceName: "APP DEVELOPMENT",
  },
  {
    iconImage: svg1,
    serviceName: "UNICORNS OF TOMORROW",
  },
];

const ServeBox = (props) => {
  return (
    <div className="serve_box">
      <img className="service_svg_image" src={props.svg} />
      <h4>{props.serviceName}</h4>
    </div>
  );
};

const Serve = (props) => {
  return (
    <div className="serve_main section">
      {services.map((elem) =>
        elem.serviceName != "tagline" ? (
          <ServeBox svg={elem.iconImage} serviceName={elem.serviceName} />
        ) : (
          <div className="tagline_box">
            <p className="tagline1 tagline">{props.tagline1}</p>
            <p className="tagline2 tagline">{props.tagline2}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Serve;
