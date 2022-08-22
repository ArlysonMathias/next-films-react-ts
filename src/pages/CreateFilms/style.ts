import styled, { css } from "styled-components";
import backgroundLogin from "../../assets/images/background-login.png";

export const CreateFilm = styled.div`
  ${({ theme }) => css`
    background-image:linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${backgroundLogin} );
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    h1 {
      color: ${theme.colors.textColor};
    }
  `};
`;

export const CreateFilmHeader = styled.header`
  display: flex;
  height: 10vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;

  button{
    margin-right: 20px;
    font-size: 1.3rem;  
    color: #f0f8ff;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: 700;

    :hover{
      transition: 0.3s ease-in-out;
      text-decoration: underline;
    }
  }
`;
export const CreateFilmContent = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;