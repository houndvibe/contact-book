import {
  FETCH_CONTACTS,
  ON_CONTACT_SELECT,
  ON_HANDLE_INFO_INPUT_CHANGE,
  ON_EDITE_CONFIRM,
  ON_CONTACT_ADD,
} from "../types";

export const fetchContacts = (data) => {
  return {
    type: FETCH_CONTACTS,
    payload: data,
  };
};

export const onContactSelect = (contact) => {
  const selectedContact = {
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    website: contact.website,
    id: contact.id,
  };

  return { type: ON_CONTACT_SELECT, payload: selectedContact };
};

export const onHandleInfoInputChange = (title, id, newValue) => (
  dispatch,
  getState
) => {
  let active = {
    ...getState().contacts.active,
  };
  active[title] = newValue;

  return dispatch({
    type: ON_HANDLE_INFO_INPUT_CHANGE,
    payload: active,
  });
};

export const onEditeConfirm = () => (dispatch, getState) => {
  let active = {
    ...getState().contacts.active,
  };

  let editedContactsList = [...getState().contacts.contactsList];

  editedContactsList = editedContactsList.map(
    (item) => (item = item.id === active.id ? active : item)
  );

  return dispatch({
    type: ON_EDITE_CONFIRM,
    payload: editedContactsList,
  });
};

export const onContactAdd = () => (dispatch, getState) => {
  let length = [...getState().contacts.contactsList].length;

  let newContact = {
    name: "",
    phone: "",
    email: "",
    website: "",
    company: "",
    id: length,
  };

  let editedContactsList = [...getState().contacts.contactsList];
  editedContactsList.unshift(newContact);

  return dispatch({
    type: ON_CONTACT_ADD,
    payload: editedContactsList,
  });
};
