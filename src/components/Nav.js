import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Nav.css";


function Nav(props) {
  return (
    <div className="Nav">

      <div
        className="Nav__NavItem Nav__NavItem_Left"
        onMouseDown={(event) => event.preventDefault()}
      >
        CONTACTS BOOK
      </div>
      <div className="Nav__NavItem Nav__NavItem_Center">
        <NavLink to={"/contacts"} className="Nav__NavItem__NavLink">
          Contacts
        </NavLink>
      </div>
      <div className="Nav__NavItem Nav__NavItem_Right ">
        <NavLink to={"/"} className="Nav__NavItem__NavLink">
          Info
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
