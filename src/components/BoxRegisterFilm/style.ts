import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const BoxRegisterFilm = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 345px;
    height: 600px;
    padding: 20px 20px 20px 20px;
    margin: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${theme.colors.opacityColor};
   
    `};
    p {
      color: ${theme.colors.textColor};
      text-align: center;
      font-size: 1.2rem;
      cursor: pointer;
      :hover{
        color: red;
      }
    }
    h1{
      color: ${theme.colors.textColor};
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }

`;

export const BoxRegisterFilmForm = styled.form`
  margin-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 14px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  all: unset;
  border: 1px solid #fcfcfc;
  border-radius: 8px;
  height: 36px;
  background: #5d737e;
  color: #fcfcfc;
  font-size: 1.2rem;
  padding: 5px;
  margin-bottom: 0.7rem;
`;
