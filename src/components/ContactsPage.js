import React from 'react';
import "../css/ContactsPage.css";
import Toolbar from './Toolbar'
import Workspace from './Workspace'

function ContactsPage(props) {
  return (
    <div className="ContactsPage">
      <Toolbar />
      <Workspace />
    </div>
  );
}

export default ContactsPage;