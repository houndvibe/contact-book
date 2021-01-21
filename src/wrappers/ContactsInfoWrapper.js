import React from "react";
import "../css/ContactsInfoWrapper.css";
import { connect, useDispatch } from "react-redux";
import Profile from "../components/ContactsInfo/Profile";
import {
  onHandleInfoInputChange,
  onEditeConfirm,
  onDelete,
} from "../store/actions/contactsActions";

function ContactsInfoWrapper({
  active,
  handleInfoInputChange,
  onEditeConfirm,
  onDelete,
}) {
  return (
    <div className="ContactsInfoWrapper">
      <Profile
        active={active}
        handleInfoInputChange={handleInfoInputChange}
        onEditeConfirm={onEditeConfirm}
        onDelete={onDelete}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  active: state.contacts.active,
});

const mapDispatchToProps = (dispatch) => ({
  handleInfoInputChange: (title, id, newValue) =>
    dispatch(onHandleInfoInputChange(title, id, newValue)),

  onEditeConfirm: () => dispatch(onEditeConfirm()),
  onDelete: () => dispatch(onDelete()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsInfoWrapper);
