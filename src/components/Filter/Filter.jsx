import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { changeFilter } from 'redux/filter/filterSlice';

const filterId = nanoid();

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

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

export default Filter;
