import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelBtnClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <button type='button' onClick={handleDelBtnClick}>
        Delete
      </button>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
