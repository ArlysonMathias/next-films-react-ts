import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #fcfcfc;
  border-radius: 8px;
  height: 36px;
  background: #5d737e;
  color: #fcfcfc;
  font-size: 1.2rem;
  padding: 5px;
  margin-bottom: 0.7rem;
  outline: none;

  ::placeholder {
    color: #fcfcfc;
    padding-left: 10px;
  }
`;

export const FormButton = styled.button`
  background: #df2935;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  color: #fcfcfc;
  height: 36px;
  cursor: pointer;
  font-weight: 600;
`;

export const ErrorMessage = styled.p`
    color: red;
    align-self: center;
    font-size: small;
    height: 2rem;
    padding: 0 2rem;
    text-align: center;
`;