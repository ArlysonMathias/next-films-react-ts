import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 25px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: fill;
`;

export const CardTitle = styled.h2`
  color: #fcfcfc;
  font-size: 1.3rem;
  font-weight: 600;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 5px;
`;

export const CardButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardButtonView = styled.button`
  background: #df2935;
  border: none;
  border-radius: 8px;
  color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 90px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 1rem;

  :hover{
    background-color: #fcfcfc;
    color: #df2935;
    font-weight: 600;
    transition: 0.3s ease-in-out;
  }
`;


