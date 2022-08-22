import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const ModalOverlay = styled.div`
  background-color: 00000004;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlayContent = styled.div`
  ${({ theme }) => css`
    width: 345px;
    height: 600px;
    padding: 20px 20px 35px 20px;
    margin: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.opacityColor};
  `};
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
