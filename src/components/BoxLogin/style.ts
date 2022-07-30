import styled from "styled-components";

export const BoxLogin = styled.section`
  position: absolute;
  width: 345px;
  height: 420px;
  padding: 20px 20px 35px 20px;
  margin: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #000000cc;
 

  p{
    color: #fcfcfc;
    text-align: center;
    font-size: 1.2rem;
  }

  a{
    color: #fcfcfc;
    text-decoration: none;
    :hover{
      color: #DF2935;
    }
  }

`;

export const BoxLoginLogo = styled.img`
  box-sizing: border-box;
  width: 30%;
  position: absolute;
  top: 0;
  left: 35%;
  margin-top: 10px;
`;

export const BoxLoginForm = styled.form`
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
    padding: 5px;
    font-size: 1.2rem;
  }
  input::placeholder{
    color: #fcfcfc;
    padding-left: 10px;
  }
`;