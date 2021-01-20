import {
  FETCH_CONTACTS
} from "../types";

export const fetchContacts = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_CONTACTS,
      payload: data,
    });
  };
};