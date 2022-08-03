import styled from "styled-components";
import backgroundLogin from "../../assets/images/background-login.png";

export const Home = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)) ,
    url(${backgroundLogin});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #fcfcfc;
`;
