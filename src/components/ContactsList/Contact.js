import React from "react";
import "../../css/Contact.css";

function Contact({ info, number, onContactSelect }) {
  return (
    <div className="Contact" onClick={() => onContactSelect(info)}>
      <div className="Contact__number">{number}</div>
      <div className="Contact__name">{info.name}</div>
      <div className="Contact__phone">{info.phone}</div>
      <div className="Contact__email">{info.email}</div>
    </div>
  );
}

export default Contact;
