import {
  FETCH_CONTACTS,
  ON_CONTACT_SELECT,
  ON_HANDLE_INFO_INPUT_CHANGE,
  ON_EDITE_CONFIRM,
  ON_CONTACT_ADD,
  ON_FILTER,
  ON_DELETE,
  ON_SORT,
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
  const active = {
    ...getState().contacts.active,
  };
  active[title] = newValue;

  return dispatch({
    type: ON_HANDLE_INFO_INPUT_CHANGE,
    payload: active,
  });
};

export const onEditeConfirm = () => (dispatch, getState) => {
  const active = {
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
  const length = [...getState().contacts.contactsList].length;

  const newContact = {
    name: "",
    phone: "",
    email: "",
    website: "",
    company: "",
    id: length,
  };

  const editedContactsList = [...getState().contacts.contactsList];
  editedContactsList.unshift(newContact);

  return dispatch({
    type: ON_CONTACT_ADD,
    payload: editedContactsList,
  });
};

export const onFilter = (value) => {
  return {
    type: ON_FILTER,
    payload: value,
  };
};

export const onDelete = () => (dispatch, getState) => {
  const active = {
    ...getState().contacts.active,
  };

  const activeId = active.id;

  const fileredContactsList = [...getState().contacts.contactsList]
    .filter((item) => item.id !== activeId)
    .map((item, index) => (item = { ...item, id: index }));

  return dispatch({
    type: ON_DELETE,
    payload: fileredContactsList,
  });
};

export const onSort = (value) => (dispatch, getState) => {
  let sortedContactsList = [...getState().contacts.contactsList];

  switch (value) {
    case "name":
      sortedContactsList.sort((itemA, itemB) =>
        itemA.name > itemB.name ? 1 : -1
      );
      break;
    case "email":
      sortedContactsList.sort((itemA, itemB) =>
        itemA.email > itemB.email ? 1 : -1
      );
      break;
    default:
      break;
  }

  return dispatch({
    type: ON_SORT,
    payload: { value: value, sortedContactsList: sortedContactsList },
  });
};
