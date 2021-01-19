import React from "react";
import "../css/Container.css";

function Container(props) {
  return <div className="Container">{props.children}</div>;
}

export default Container;
