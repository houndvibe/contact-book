import React, { useState } from "react";
import "../../css/InfoLine.css";

function InfoLine({ title, data, handleInfoInputChange, id }) {
  return (
    <div className="InfoLine">
      <div className="InfoLine__title InfoLine__title_main">{`${title}: `}</div>
      <input
        className="InfoLine__input"
        id={id}
        value={data}
        onChange={(event) =>
          handleInfoInputChange(title, id, event.target.value)
        }
      />
    </div>
  );
}

export default InfoLine;
