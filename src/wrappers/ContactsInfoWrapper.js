import React from "react";
import "../css/ContactsInfoWrapper.css";
import { connect, useDispatch } from "react-redux";
import Profile from "../components/ContactsInfo/Profile";

function ContactsInfoWrapper({ active }) {
  return (
    <div className="ContactsInfoWrapper">
      <Profile active={active} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  active: state.contacts.active,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsInfoWrapper);
