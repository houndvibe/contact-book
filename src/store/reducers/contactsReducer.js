import {
  FETCH_CONTACTS,
  ON_CONTACT_SELECT,
  ON_HANDLE_INFO_INPUT_CHANGE,
  ON_EDITE_CONFIRM,
  ON_CONTACT_ADD,
} from "../types";

const initialState = {
  filterBy: "disabled",
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
      console.log("!!!");
      return {
        ...state,
        contactsList: action.payload,
      };
  }
  return state;
}
