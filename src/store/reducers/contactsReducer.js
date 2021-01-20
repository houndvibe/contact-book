import {
  FETCH_CONTACTS
} from "../types";

const initialState = {
  filterBy: "disabled",
  contactsList: [],
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contactsList: action.payload,
      };
  }
  return state
}
