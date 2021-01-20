import React from "react";
import "../css/Workspace.css";
import ContactsListWrapper from "../wrappers/ContactsListWrapper";
import ContactsInfoWrapper from "../wrappers/ContactsInfoWrapper";

function Workspace(props) {
  return (
    <div className="Workspace">
      <ContactsListWrapper />
      <ContactsInfoWrapper />
    </div>
  );
}

export default Workspace;
