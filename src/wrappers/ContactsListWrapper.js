import React, { useEffect } from "react";
import "../css/ContactsListWrapper.css";
import ContactsList from "../components/ContactsList/ContactsList";
import Toolbar from "../components/Toolbar";
import { connect, useDispatch } from "react-redux";
import {
  fetchContacts,
  onContactSelect,
  onContactAdd,
} from "../store/actions/contactsActions";

function ContactsListWrapper({ contacts, onContactSelect, onContactAdd }) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://demo.sibers.com/users")
      .then((response) => response.json())
      .then((data) => dispatch(fetchContacts(data)));
  }, [dispatch, fetchContacts]);

  return (
    <div className="ContactsListWrapper">
      <Toolbar onContactAdd={onContactAdd} />
      <ContactsList contactsList={contacts} onContactSelect={onContactSelect} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.contactsList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: (data) => fetchContacts(data),
  onContactSelect: (contact) => dispatch(onContactSelect(contact)),
  onContactAdd: () => dispatch(onContactAdd()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListWrapper);
