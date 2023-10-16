import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Title } from './Contacts/Contacts.styled';
import { ToastContainer, Zoom } from 'react-toastify';

export const App = () => {
  return (
    <>
      <div>
        <Title>Phonebook</Title>
        <ContactForm />

        <Title>Contacts</Title>
        <ContactFilter />
        <Contacts />
      </div>
      <ToastContainer transition={Zoom} />
    </>
  );
};
