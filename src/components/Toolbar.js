import React from "react";
import "../css/Toolbar.css";

function Toolbar({ onContactAdd, onFilter }) {
  return (
    <div className="Toolbar">
      <input onChange={(e) => onFilter(e.target.value)}></input>
      <button onClick={() => onContactAdd()}>Add new contact</button>
    </div>
  );
}

export default Toolbar;
