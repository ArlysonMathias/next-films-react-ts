import styled from "styled-components";

export const BoxRegister = styled.section`
  position: absolute;
  width: 345px;
  height: 500px;
  padding: 20px 20px 35px 20px;
  margin: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #000000cc;

  p {
    color: #fcfcfc;
    text-align: center;
    font-size: 1.2rem;
  }

`;

export const BoxRegisterLogo = styled.img`
  box-sizing: border-box;
  width: 30%;
  position: absolute;
  top: 0;
  left: 35%;
  margin-top: 5px;
`;

export const BoxRegisterForm = styled.form`
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
  }
  input::placeholder {
    color: #fcfcfc;
    padding-left: 10px;
  }
`;

export const BoxRegisterFooter = styled.div`
  button{
    cursor: pointer;
    background-color: transparent;
    color: #fcfcfc;
    font-size: 1.2rem;
    text-decoration: none;
    :hover{
      color: #DF2935;
    }
  }
`;