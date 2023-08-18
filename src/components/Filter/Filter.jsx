import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';

const filterId = nanoid();

const Filter = ({ handleFilterChange }) => {
  const filter = useSelector(selectFilter);
  return (
    <>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <Input
        id={filterId}
        type='text'
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
