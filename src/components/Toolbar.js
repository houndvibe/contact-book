import React from "react";
import "../css/Toolbar.css";

function Toolbar({ onContactAdd, onFilter }) {
  return (
    <div className="Toolbar">
      <div>
        {" "}
        {"Filter: "}
        <input
          className="Toolbar__input"
          onChange={(e) => onFilter(e.target.value)}
        ></input>
      </div>
      <button className="Toolbar__button" onClick={() => onContactAdd()}>
        ADD NEW CONTACT
      </button>
    </div>
  );
}

export default Toolbar;
