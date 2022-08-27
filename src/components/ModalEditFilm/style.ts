import styled from "styled-components";
import theme from "../../styles/theme";

export const ModalOverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 30vh;
  border-radius: 8px;
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  gap: 3rem;
  color: #000;

  p {
    color: ${theme.colors.textColor};
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
    :hover {
      color: red;
    }
  }
  h1 {
    color: ${theme.colors.textColor};
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const ModalForm = styled.form`
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
