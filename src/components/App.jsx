// IMportacion de componentes de clase;
import {useEffect, useState} from 'react';
import shortid from 'shortid';
// import s from '../index.module.css';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import Notiflix from 'notiflix';

export default function App  ()  {
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
// metodo con metodo lowercase para los valores
  const [filter,    setFilter] = useState("");  

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
    if(contacts.length === 0){
      localStorage.removeItem("contacts");
    }
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(prevContacts => [
      ...prevContacts.filter(contact => contact.id !== contactId),
    ])
  }

  const newContactAudit = newContact => {
    return contacts.filter(
        contact =>
            contact.name?.toLowerCase() === newContact.name?.toLowerCase()
    );
};

const contactFormSubmitHandler = newContact => {
    if (newContactAudit(newContact).length > 0) {
        alert(`${newContact.name} is already in contacts.`);
        return false;
    } else {
        setContacts(prevContacts => [...prevContacts, newContact]);
        return true;
    }
};

const contactFilter = event => {
    setFilter(event.target.value);
};

const filterValueLowerCase = filter?.toLowerCase();

const visibleContacts = contacts.filter(contact => {
    return contact.name?.toLowerCase().includes(filterValueLowerCase);
});


    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '18',
        //color: '#010101',
      }}>
      <h1>Phonebook</h1>
        <ContactForm onSubmit={contactFormSubmitHandler} />

        <h2 className=''>Contacts</h2>
        <div className=''>All contacts: {contacts.length}</div>

        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={contactFilter} />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={deleteContact}
            />
          </>
        ) : (
          <Notification message="Contact list is empty" />
        )}
      </div>
    );
  }
