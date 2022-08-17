import styled from "styled-components";

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Header = styled.section`
  width: 100%;
  height: 20vh;
  display: flex;
  /* box-sizing: border-box; */
  align-items: center;
  justify-content: space-around;
`;

export const HeaderLogo = styled.img`
  box-sizing: border-box;
  width: 98px;
  height: 89px;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: start;
`;

export const HeaderMenu = styled.div<ButtonProps>`
  width: 100%;
  margin-right: 500px;
  height: auto;
  display: flex;
  justify-content: space-evenly;

  button {
    display: flex;
    background-color: transparent;
    text-decoration: none;
    border: none;
    color: #fcfcfc;
    font-weight: 600;
    font-size: 1.4rem;
    margin: 30px 10px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    :hover {
      color: #df2935;
    }
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
