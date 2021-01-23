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

const initialState = {
  filteredBy: "",
  sortBy: "disabled",
  contactsList: [],
  active: null,
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contactsList: action.payload,
      };

    case ON_CONTACT_SELECT:
      return {
        ...state,
        active: action.payload,
      };

    case ON_HANDLE_INFO_INPUT_CHANGE:
      return {
        ...state,
        active: action.payload,
      };

    case ON_EDITE_CONFIRM:
      return {
        ...state,
        contactsList: action.payload,
      };

    case ON_CONTACT_ADD:
      return {
        ...state,
        contactsList: action.payload,
      };

    case ON_FILTER:
      return {
        ...state,
        filteredBy: action.payload,
      };

    case ON_DELETE:
      return {
        ...state,
        contactsList: action.payload,
        active: null,
      };

    case ON_SORT:
      return {
        ...state,
        sortBy: action.payload.value,
        contactsList: action.payload.sortedContactsList,
      };
  }
  return state;
}
