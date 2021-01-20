import React, { useEffect } from 'react';
import '../../css/ContactsList.css'


function ContactsList(props) {


  useEffect(() => {
    fetch('http://demo.sibers.com/users')
      .then((response) => response.json())
      .then(response => console.log(response))
  })

  return (
    <div className='ContactsList'>
      ContactsList
    </div>
  );
}

export default ContactsList;