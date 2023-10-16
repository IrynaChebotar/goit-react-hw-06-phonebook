import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';
import { ListWrapper, DeleteBtn } from './ContactItem.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ListWrapper>
      {name}: {number}
      <DeleteBtn
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
          toast.success(`Contact "${name}" deleted successfully!`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }}
      >
        Delete
      </DeleteBtn>
    </ListWrapper>
  );
};
