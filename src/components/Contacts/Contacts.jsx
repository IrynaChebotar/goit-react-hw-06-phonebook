import { useDispatch, useSelector } from 'react-redux';
import { resetContacts } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { DeleteBtn, ListWrapper, ItemStyle } from './Contacts.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  const handleResetContacts = () => {
    if (contacts.length >= 1) {
      if (
        window.confirm(
          'Are you sure you want to return Contacts to their starting positions?'
        )
      ) {
        dispatch(resetContacts());
        toast.success('Contacts updated successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    }
  };

  return (
    <ListWrapper>
      {visibleContacts.map(item => (
        <ItemStyle key={item.id}>
          <ContactItem {...item} />
        </ItemStyle>
      ))}
      <DeleteBtn type="button" onClick={handleResetContacts}>
        Reset
      </DeleteBtn>
    </ListWrapper>
  );
};
