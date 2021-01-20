import { FETCH_CONTACTS, ON_CONTACT_SELECT } from "../types";

const initialState = {
  filterBy: "disabled",
  contactsList: [],
  active: {},
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
  }
  return state;
}
