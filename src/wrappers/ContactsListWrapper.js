import React, { useEffect } from "react";
import "../css/ContactsListWrapper.css";
import ContactsList from "../components/ContactsList/ContactsList";
import Toolbar from "../components/Toolbar";
import { connect, useDispatch } from "react-redux";
import {
  fetchContacts,
  onContactSelect,
  onContactAdd,
  onFilter,
} from "../store/actions/contactsActions";

function ContactsListWrapper({
  contacts,
  filteredBy,
  onContactSelect,
  onContactAdd,
  onFilter,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://demo.sibers.com/users")
      .then((response) => response.json())
      .then((data) => dispatch(fetchContacts(data)));
  }, [dispatch, fetchContacts]);

  return (
    <div className="ContactsListWrapper">
      <Toolbar onContactAdd={onContactAdd} onFilter={onFilter} />
      <ContactsList
        contactsList={contacts}
        onContactSelect={onContactSelect}
        filteredBy={filteredBy}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.contactsList,
  filteredBy: state.contacts.filteredBy,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: (data) => fetchContacts(data),
  onContactSelect: (contact) => dispatch(onContactSelect(contact)),
  onContactAdd: () => dispatch(onContactAdd()),
  onFilter: (value) => dispatch(onFilter(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListWrapper);
