import React from "react";
import "../../css/Contact.css";

function Contact({ info, number, onContactSelect, active }) {
  return (
    <div
      className={`Contact ${
        active && active.id === info.id && "activeContact"
      }`}
      onClick={() => onContactSelect(info)}
    >
      <div className="Contact__number">{`${number}.`}</div>
      <div className={`Contact__name ${info.name === "" ? "empty" : ""}`}>
        {info.name ? info.name : "...Name"}
      </div>
      <div className={`Contact__phone ${info.phone === "" ? "empty" : ""}`}>
        {info.phone ? info.phone : "...Phone"}
      </div>
      <div className={`Contact__email ${info.email === "" ? "empty" : ""}`}>
        {info.email ? info.email : "...@email"}
      </div>
    </div>
  );
}

export default Contact;
