import React from "react";
import "../../css/ContactsList.css";
import Contact from "../ContactsList/Contact";

function ContactsList({ contactsList, onContactSelect }) {
  return (
    <div className="ContactsList">
      {contactsList.map((item, index) => (
        <Contact
          key={item.id}
          info={item}
          number={index + 1}
          onContactSelect={onContactSelect}
        />
      ))}
    </div>
  );
}

export default ContactsList;
