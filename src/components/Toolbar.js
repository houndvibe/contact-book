import React from "react";
import "../css/Toolbar.css";

function Toolbar({ onContactAdd }) {
  return (
    <div className="Toolbar">
      Toolbar
      <input></input>
      <button onClick={() => onContactAdd()}>Add new contact</button>
    </div>
  );
}

export default Toolbar;
