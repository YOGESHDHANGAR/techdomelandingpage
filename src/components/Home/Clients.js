import React from "react";
import "./Clients.css";
import capgemini from "../../assets/capgemini.png";
import domingo from "../../assets/domingo.png";
import ebs360 from "../../assets/ebs360.png";
import fullerton from "../../assets/fullerton.png";
import lockton from "../../assets/lockton.png";
import neatheat from "../../assets/neatheat.png";
import profiling from "../../assets/profiling.png";
import rapidcircle from "../../assets/rapidcircle.png";
import salemseats from "../../assets/salemseats.png";
import zebpay from "../../assets/zebpay.png";

const clientsImages = [
  capgemini,
  domingo,
  ebs360,
  fullerton,
  lockton,
  neatheat,
  profiling,
  rapidcircle,
  salemseats,
  zebpay,
];

const Clients = (props) => {
  return (
    <div className="clients_main section">
      <p className="tagline1 tagline">
        {props.tagline1}
        <span className="tagline2 tagline">{props.tagline2}</span>
      </p>
      <div className="clients_images content">
        {clientsImages.map((url) => (
          <img className="client_img" src={url} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
