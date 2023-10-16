import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const phoneBookSlic = createSlice({
  name: 'phoneBook',
  initialState: startContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            ...values,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    resetContacts(state, action) {
      return startContacts;
    },
  },
});

export const { addContact, deleteContact, resetContacts } =
  phoneBookSlic.actions;
export const contactsReducer = phoneBookSlic.reducer;
