import React from "react";
import "../../css/ContactsList.css";
import Contact from "../ContactsList/Contact";

function ContactsList({ contactsList, onContactSelect, filteredBy, active }) {
  let filteredContactsList = contactsList.filter(
    (item) =>
      item.name.includes(filteredBy) ||
      item.phone.includes(filteredBy) ||
      item.email.includes(filteredBy)
  );

  return filteredContactsList.length > 0 ? (
    <div className="ContactsList">
      {filteredContactsList.map((item, index) => (
        <Contact
          key={item.id}
          info={item}
          number={index + 1}
          onContactSelect={onContactSelect}
          active={active}
        />
      ))}
    </div>
  ) : (
    <div className="ContactsList__sadMessage">Empty...</div>
  );
}

export default ContactsList;
