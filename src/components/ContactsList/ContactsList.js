import React from "react";
import "../../css/ContactsList.css";
import Contact from "../ContactsList/Contact";

function ContactsList({ contactsList }) {
  return (
    <div className="ContactsList">
      {contactsList.map((item, index) => (
        <Contact
          name={item.name}
          phone={item.phone}
          email={item.email}
          number={index + 1}
        />
      ))}
    </div>
  );
}

export default ContactsList;
