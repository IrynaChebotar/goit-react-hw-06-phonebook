import { useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/filterSlice';
import { Description, Wrapper } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      Find contact by name
      <Description
        type="text"
        name="text"
        onChange={evt => dispatch(getVisibleContacts(evt.target.value))}
      />
    </Wrapper>
  );
};
