import React, { useEffect } from 'react';
import '../../css/ContactsList.css'
import { connect, useDispatch } from 'react-redux'
import { fetchContacts } from '../../store/actions/contactsActions'

function ContactsList(props) {

  const dispatch = useDispatch();


  useEffect(() => {
    fetch('http://demo.sibers.com/users')
      .then((response) => response.json())
      .then((data) => dispatch(fetchContacts(data)))
  }, [dispatch, fetchContacts])


  return (
    <div className='ContactsList'>
      contactsList
    </div>
  );

}

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: (data) => dispatch(fetchContacts(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);