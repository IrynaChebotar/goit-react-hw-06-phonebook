import styled from 'styled-components';

export const ListWrapper = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const DeleteBtn = styled.button`
  padding: 4px;
  margin-left: 10px;
  height: 100%;
  font-size: 12px;
  border-radius: 33.5px;
  background: #3cb3ab;
  border: none;
  &:hover {
    color: #fff;
    background-color: #147a73;
    box-shadow: 1px 2px 6px 0px rgba(52, 129, 93, 0.7);
  }
  box-shadow: 0 2px 4px rgba(52, 129, 93, 0.7);
`;
