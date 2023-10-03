import React, { useState } from "react";
import "./Shaping.css";
import fintechImage from "../../assets/fintechImage.webp";
import healthcareImage from "../../assets/healthcareImage.webp";
import insauranceImage from "../../assets/insauranceImage.webp";
import manufacturingImage from "../../assets/manufacturingImage.webp";
import hospitilityImage from "../../assets/hospitilityImage.webp";

const items = [
  {
    heading: "Fintech",
    image: fintechImage,
    subHeadingPart1: "Managing Finances,",
    subHeadingPart2: "like never before with Techdome.",
    description:
      "Our team of experts offers IT services to the Fintech industry, from software development to data analytics. We have worked with top-tier financial institutions.",
    points: [
      "Banking and finance software development systems",
      "Digital payments and wallets",
      "Detection and prevention systems",
    ],
  },
  {
    heading: "Healthcare",
    image: healthcareImage,
    subHeadingPart1: "Transforming Healthcare",
    subHeadingPart2: "with Techdome.",
    description:
      "Revolutionizing patient care with cutting-edge IT solutions. We partner with hospitals, clinics, and healthcare providers to enhance their IT infrastructure and streamline processes. Our services include healthcare software development, telemedicine, and IoT-based medical devices.",
    points: [
      "Electronic health records (EHR) management systems",
      "Monitoring and management software",
    ],
  },
  {
    heading: "Manufacturing",
    image: manufacturingImage,
    subHeadingPart1: "Automation and Technology Reshaped",
    subHeadingPart2: "with Techdome.",
    description:
      "Our software solutions simplify manufacturing processes and improve efficiency. Our experts develop tailored applications and platforms for each client. Our services include manufacturing software development, IoT-based automation, and supply chain management",
    points: [
      "Production planning and scheduling software",
      "Quality management systems",
      "Inventory management software",
    ],
  },
  {
    heading: "Insaurance",
    image: insauranceImage,
    subHeadingPart1: "Revolutionizing Insurance Industry",
    subHeadingPart2: "with Techdome.",
    description:
      "We create custom software applications to help insurance companies automate their workflows and optimize their processes.",
    points: [
      "Policy management systems",
      "Claims processing software",
      "Claims processing software",
    ],
  },
  {
    heading: "Hospitality",
    image: hospitilityImage,
    subHeadingPart1: "Modernizing Pet Hospitality with",
    subHeadingPart2: "with Techdome.",
    description:
      "We develop custom software solutions for pet hospitality businesses, such as pet hotels, daycare, and grooming services. Our services help them manage customer bookings and staff schedules.",
    points: [
      "Online booking and reservation software",
      "Pet grooming and daycare management software",
    ],
  },
];

const HoverableList = ({ items }) => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  return (
    <div className="hoverablelist_main content">
      <div className="hover_links">
        {items.map((item, index) => (
          <h2
            key={index}
            className={`${index === hoverIndex ? "active_link" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {item.heading}
          </h2>
        ))}
      </div>
      {hoverIndex !== -1 && (
        <div className="link_details">
          <img className="link_image" src={items[hoverIndex].image} />
          <div className="link_details_without_image">
            <h3 className="description">{items[hoverIndex].subHeadingPart1}</h3>
            <h3>{items[hoverIndex].subHeadingPart2}</h3>
            <p className="description">{items[hoverIndex].description}</p>
            <ol className="points_list">
              {items[hoverIndex].points.map((point, index) => (
                <li className="description" key={index}>
                  {point}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

const Shaping = (props) => {
  return (
    <div className="shaping_main section">
      <p className="tagline1 tagline">
        {props.tagline1}
        <span className="tagline2 tagline">{props.tagline2}</span>
      </p>
      <HoverableList items={items} />
    </div>
  );
};

export default Shaping;
