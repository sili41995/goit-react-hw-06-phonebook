import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          handleDelBtnClick={() => {
            dispatch(deleteContact(id));
          }}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
