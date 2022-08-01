import styled from "styled-components";

export const Search = styled.div`
  position: absolute;
  top: 10%;
  left: 70%;
  transform: translate(-50%, -50%);
  background: #5d737e;
  height: 40px;
  border-radius: 10px;
  :hover input {
    width: 200px;
    padding: 0 10px;
  }
  &:hover {
    background: #5d737e;
  }
`;

export const SearchInput = styled.input`
  width: 0;
  border: none;
  outline: none;
  padding: 0;
  background: none;
  font-size: 1.2rem;
  transition: 0.5s ease;
  line-height: 36px;
  color: #fcfcfc;  
  ::placeholder{
    color: #fcfcfc;
  }
`;

export const SearchA = styled.a`
  color: #fcfcfc;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  background: #5d737e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;
  :hover {
    transform: rotate(360deg) scale(0.8);
  }
`;
