import { FETCH_CONTACTS, ON_CONTACT_SELECT } from "../types";

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
    address: contact.address,
    company: contact.company.name,
  };

  return { type: ON_CONTACT_SELECT, payload: selectedContact };
};
