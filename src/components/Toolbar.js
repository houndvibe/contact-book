import React from "react";
import "../css/Toolbar.css";

function Toolbar({ onContactAdd, onFilter, onSort, sortBy }) {
  return (
    <div className="Toolbar">
      <div className="Toolbar__left">
        {" "}
        {"Filter: "}
        <input
          className="Toolbar__input"
          onChange={(e) => onFilter(e.target.value)}
        ></input>
      </div>
      <div className="Toolbar__center">
        {"Sort by: "}
        <select
          name="select"
          className="Toolbar__select"
          onChange={(e) => onSort(e.target.value)}
          value={sortBy}
        >
          <option value="disabled">disabled</option>
          <option value="name">by Name</option>
          <option value="email">by Email</option>
        </select>
      </div>
      <div className="Toolbar__right">
        <button className="Toolbar__button" onClick={() => onContactAdd()}>
          ADD NEW CONTACT
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
