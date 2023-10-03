import React from "react";
import "./WhyTechdome.css";
import svg1 from "../../assets/svg1.webp";

const whytechdomeContent = [
  {
    svg: svg1,
    heading: "Your Problem, Our Solution",
    descrition:
      "At Techdome, we specialize in providing tailored solutions for every problem. Our experts work with you to identify the issue and create an effective plan of action.",
  },
  {
    svg: svg1,
    heading: "Agile Work Process.",
    descrition:
      "Our focus is on individuals and interactions: Techdome provides transparency, comprehensive documentation, and ongoing support. We welcome any updates or improvements at any stage!",
  },
  {
    svg: svg1,
    heading: "We’re Available!",
    descrition:
      "Our support team is always available to resolve any conflicts you’re facing. Need smooth scalability? Let the experts handle it!",
  },
  {
    svg: svg1,
    heading: "Simplifying Your Solutions.",
    descrition:
      "Say goodbye to complex solutions – we offer one simple system to solve all your problems!",
  },
];

const WhyTechdomeBox = (props) => {
  return (
    <div className="whytechdom_box">
      <img className="svg_image" src={props.svg} />
      <div>
        <h3>{props.heading}</h3>
        <p className="description">{props.descrition}</p>
      </div>
    </div>
  );
};

const WhyTechdome = (props) => {
  return (
    <div className="whytechdome_main section">
      <p className="tagline1 tagline">
        {props.tagline1}
        <span className="tagline2 tagline">{props.tagline2}</span>
      </p>
      <p className="tagline_description">
        Delivering the best solutions, Maintaining transparent communications,
        Never giving up. <br /> Start with Techdome, Stay with Techdome.
      </p>
      <div className="whytechdome_content content">
        {whytechdomeContent.map((elem) => (
          <WhyTechdomeBox
            svg={elem.svg}
            heading={elem.heading}
            descrition={elem.descrition}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyTechdome;
