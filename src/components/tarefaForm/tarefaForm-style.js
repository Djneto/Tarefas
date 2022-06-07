import styled from 'styled-components';

export const Form = styled.form`
  background: white;
  padding: 35px;
  display: flex;
`;

export const Input = styled.input`
  width: 430px;
  height: 35px;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 4px 4px 4px #000000;
  border-radius: 8px;
  font-size: 1.25em;
  margin-right: 20px;
  padding-left: 10px;
  font-family: 'Rubik';
  outline: none;
`;

export const Button = styled.button`
  width: 55px;
  height: 43px;
  background: #000000;
  border-radius: 8px;
  border: 3px solid #000000;
  box-shadow: 4px 4px 4px #000000;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0px 0px 0px #000000;
  }
`;
