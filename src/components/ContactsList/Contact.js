import React from "react";
import "../../css/Contact.css";

function Contact({ name, phone, email, number }) {
  return (
    <div className="Contact">
      <div className="Contact__number">{number}</div>
      <div className="Contact__name">{name}</div>
      <div className="Contact__phone">{phone}</div>
      <div className="Contact__email">{email}</div>
    </div>
  );
}

export default Contact;
