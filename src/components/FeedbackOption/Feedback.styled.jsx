import styled from 'styled-components';

export const Btn = styled.button`
  padding: 10px;
  color: rgb(255, 255, 255);
  background-color: rgb(247, 64, 2);
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 15px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.4);

  &:hover,
  &:focus {
    color: rgb(0, 0, 0);
    background-color: #c5c5c5;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.7) inset;
  }
`;
