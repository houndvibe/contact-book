import React from 'react';
import '../css/ContactsListWrapper.css'
import ContactsList from '../components/ContactsList/ContactsList'

function ContactsListWrapper(props) {
  return (
    <div className='ContactsListWrapper'>
      <ContactsList />
    </div>
  );
}

export default ContactsListWrapper;