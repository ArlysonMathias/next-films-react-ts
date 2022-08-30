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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
