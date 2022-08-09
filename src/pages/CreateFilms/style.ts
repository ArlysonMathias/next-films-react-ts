import styled, { css } from "styled-components";
import backgroundLogin from "../../assets/images/background-login.png";


export const CreateFilm = styled.section`
  ${({ theme }) => css`
    background-image: url(${backgroundLogin});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1{
      color: ${theme.colors.textColor}
    }
  `};
  header{

  }
  div{

  }
`;

