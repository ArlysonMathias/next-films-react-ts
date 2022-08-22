import styled from "styled-components";

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const InputRegisterForm = styled.form`
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 14px;
  box-sizing: border-box;
  input {
    border: 1px solid #fcfcfc;
    border-radius: 8px;
    height: 36px;
    background: #5d737e;
    color: #fcfcfc;
    font-size: 1.2rem;
    padding: 5px;
    margin-bottom: 0.7rem;
    outline: none;
  }
  input::placeholder {
    color: #fcfcfc;
    padding-left: 10px;
  }
`;
