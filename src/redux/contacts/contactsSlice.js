import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, { payload }) => [...state, payload],
    deleteContact: (state, { payload }) => [
      ...state.filter(({ id }) => id !== payload),
    ],
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
