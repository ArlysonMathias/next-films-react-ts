import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-right: 3rem;
`;

export const Header = styled.section`
  width: 100%;
  height: 20vh;
  display: flex;
  margin-bottom: 7rem;
  margin-left: 5rem;
  align-items: center;
  justify-content: space-around;
  div {
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
      font-size: 1.2rem;
      margin: 30px 10px;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      :hover {
        color: #df2935;
      }
    }
  }

  input{
    display: flex;
    align-items: center;
    height: 40px;
    width: 40px;
    background: #5d737e;
    font-size: 1.2rem;
    color: #fcfcfc;
    width: 200px;
    padding: 0 10px;
    border-radius: 10px;
    outline: none;

    ::placeholder{
    color: #fcfcfc;
  }
  }
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
