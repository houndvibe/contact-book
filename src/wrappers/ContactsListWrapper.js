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
  onSort,
} from "../store/actions/contactsActions";

function ContactsListWrapper({
  contacts,
  filteredBy,
  onContactSelect,
  onContactAdd,
  onFilter,
  active,
  sortBy,
  onSort,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://demo.sibers.com/users")
      .then((response) => response.json())
      .then((data) => dispatch(fetchContacts(data)));
  }, [dispatch, fetchContacts]);

  return (
    <div className="ContactsListWrapper">
      <Toolbar
        onContactAdd={onContactAdd}
        onFilter={onFilter}
        onSort={onSort}
        sortBy={sortBy}
      />
      <ContactsList
        contactsList={contacts}
        onContactSelect={onContactSelect}
        filteredBy={filteredBy}
        active={active}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.contactsList,
  filteredBy: state.contacts.filteredBy,
  active: state.contacts.active,
  sortBy: state.contacts.sortBy,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: (data) => fetchContacts(data),
  onContactSelect: (contact) => dispatch(onContactSelect(contact)),
  onContactAdd: () => dispatch(onContactAdd()),
  onFilter: (value) => dispatch(onFilter(value)),
  onSort: (value) => dispatch(onSort(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListWrapper);
