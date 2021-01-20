import React from "react";
import "../css/MainWrapper.css";

function MainWrapper(props) {
  return <div className="MainWrapper">{props.children}</div>;
}

export default MainWrapper;
