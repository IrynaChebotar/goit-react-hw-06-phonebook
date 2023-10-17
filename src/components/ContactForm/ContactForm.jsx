import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { selectContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Label,
  StyledForm,
  StyledField,
  AddBtn,
  StyledError,
} from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact(values));
      actions.resetForm();
      toast.success(`Contact ${values.name} added successfully!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handleAddContact}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" />
            <StyledError name="name" component="div" />
          </Label>

          <Label>
            Phone Number
            <StyledField name="number" placeholder="XXX-XX-XX" />
            <StyledError name="number" component="div" />
          </Label>

          <AddBtn type="submit">Add contact</AddBtn>
        </StyledForm>
      </Formik>
    </>
  );
};
