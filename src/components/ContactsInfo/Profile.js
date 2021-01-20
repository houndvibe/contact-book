import React from "react";
import "../../css/Profile.css";
import InfoLine from "../ContactsInfo/InfoLine";

function Profile({ active }) {
  return (
    <div className="Profile">
      {active.name ? (
        <>
          <InfoLine title="Name" data={active.name} />
          <InfoLine title="Phone" data={active.phone} />
          <InfoLine title="@Email" data={active.email} />
          <InfoLine title="Website" data={active.website} />
          <InfoLine title="Company" data={active.company} />
          <InfoLine title="Address" data={active.address} />
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
