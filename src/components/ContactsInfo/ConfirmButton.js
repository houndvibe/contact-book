import React from "react";
import "../../css/ConfirmButton.css";

function ConfirmButton({ onEditeConfirm }) {
  return (
    <button className="ConfirmButton" onClick={() => onEditeConfirm()}>
      Confirm Changes
    </button>
  );
}

export default ConfirmButton;
