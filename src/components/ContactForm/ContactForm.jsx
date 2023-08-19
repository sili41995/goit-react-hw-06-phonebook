import React from 'react';
import { useForm } from 'react-hook-form';
import { validateName, validateNumber } from 'utils/validateFields';
import { Container, Input, Label, Error } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { name } = data;
    const isContact = contacts.some(
      ({ name: contactName }) => contactName === name
    );
    if (isContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const contact = { id: nanoid(), ...data };
    dispatch(addContact(contact));
    reset();
  };

  const validateNameField = validateName();
  const validateNumberField = validateNumber();
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor={nameId}>Name</Label>
          <Input
            id={nameId}
            type='text'
            {...register('name', {
              required: true,
              pattern: validateNameField.pattern,
            })}
          />
          {errors.name && <Error>{validateNameField.errorMessage}</Error>}
        </div>
        <div>
          <Label htmlFor={numberId}>Number</Label>
          <Input
            type='tel'
            id={numberId}
            {...register('number', {
              required: true,
              pattern: validateNumberField.pattern,
            })}
          />
          {errors.number && <Error>{validateNumberField.errorMessage}</Error>}
        </div>
        <button type='submit'>Add contact</button>
      </form>
    </Container>
  );
};

export default ContactForm;
