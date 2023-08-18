const filteredContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLowerCase();
  return filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      )
    : contacts;
};

export default filteredContacts;
