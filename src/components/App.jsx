import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Section from 'components/Section';
import filteredContacts from 'utils/filteredContacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/contactsSlice';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = filteredContacts(filter, contacts);

  const handleFilterChange = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  const handleFormSubmit = (values, resetForm) => {
    const isContact = contacts.some(({ name }) => name === values.name);
    if (isContact) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    const contact = { id: nanoid(), ...values };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm handleFormSubmit={handleFormSubmit} />
      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <ContactList contacts={visibleContacts} />
    </Section>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default App;
