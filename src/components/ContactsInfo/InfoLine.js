import React from "react";
import "../../css/InfoLine.css";

function InfoLine({ title, data }) {
  return (
    <div className="InfoLine">
      <div className="InfoLine__title InfoLine__title_main">{`${title}: `}</div>
      {title !== "Address" ? (
        <div className="InfoLine__data">{data}</div>
      ) : (
        <div className="InfoLine__data InfoLine__data_adress">
          <div className="InfoLine__title">Country:</div>
          <div className="InfoLine__data">{data?.country}</div>
          <div className="InfoLine__title">State:</div>
          <div className="InfoLine__data">{data?.state}</div>
          <div className="InfoLine__title">City:</div>
          <div className="InfoLine__data">{data?.city}</div>
          <div className="InfoLine__title">Street A:</div>
          <div className="InfoLine__data">{data?.streetA}</div>
          <div className="InfoLine__title">Street B::</div>
          <div className="InfoLine__data">{data?.streetB}</div>
          <div className="InfoLine__title">Street C:</div>
          <div className="InfoLine__data">{data?.streetC}</div>
          <div className="InfoLine__title">Street D:</div>
          <div className="InfoLine__data">{data?.streetD}</div>
        </div>
      )}
    </div>
  );
}

export default InfoLine;
