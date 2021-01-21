import React from "react";
import "../../css/Profile.css";
import InfoLine from "../ContactsInfo/InfoLine";
import ConfirmButton from "./ConfirmButton";

function Profile({ active, handleInfoInputChange, onEditeConfirm }) {
  return (
    <div className="Profile">
      {active ? (
        <>
          <InfoLine
            id={active.id}
            title="name"
            data={active.name}
            handleInfoInputChange={handleInfoInputChange}
          />
          <InfoLine
            id={active.id}
            title="phone"
            data={active.phone}
            handleInfoInputChange={handleInfoInputChange}
          />
          <InfoLine
            id={active.id}
            title="email"
            data={active.email}
            handleInfoInputChange={handleInfoInputChange}
          />
          <InfoLine
            id={active.id}
            title="website"
            data={active.website}
            handleInfoInputChange={handleInfoInputChange}
          />
          <ConfirmButton onEditeConfirm={onEditeConfirm} />
        </>
      ) : (
        <div className="Profile__Message">
          Hi! Сlick on any contact to view more information and edit.
        </div>
      )}
    </div>
  );
}

export default Profile;
