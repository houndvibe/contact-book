import React from "react";
import "../../css/Profile.css";
import InfoLine from "../ContactsInfo/InfoLine";

function Profile({ active, handleInfoInputChange, onEditeConfirm, onDelete }) {
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
          <button
            className="Profile__button Profile__button_confirm"
            onClick={() => onEditeConfirm()}
          >
            Confirm editing
          </button>
          <button
            className="Profile__button Profile__button_delete"
            onClick={() => onDelete()}
          >
            Delete contact
          </button>
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
