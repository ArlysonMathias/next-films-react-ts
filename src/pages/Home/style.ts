import styled from "styled-components";
import backgroundLogin from "../../assets/images/background-login.png";

export const Home = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
    url(${backgroundLogin});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #fcfcfc;
`;

export const HomeHeader = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
`;

export const HomeHeaderLogo = styled.img`
  box-sizing: border-box;
  width: 98px;
  height: 89px;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: start;
`;

export const HomeHeaderMenu = styled.div`
  margin-right: 500px;
  a {
    text-decoration: none;
    color: #fcfcfc;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 30px 10px;
    transition: 0.3s ease-in-out;
  }
  a:hover {
    color: #df2935;
  }
`;

export const HomeHeaderMenu2 = styled.span`
  margin-right: 100px;
  a {
    text-decoration: none;
    color: #fcfcfc;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 30px 10px;
  }
  a:hover {
    color: #df2935;
  }
`;
