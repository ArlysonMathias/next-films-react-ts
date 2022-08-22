import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
 
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-right: 3rem;

`;
export const ListFilms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 50px;
  h2{
      margin-top: 25px;
      margin-left: 50px;
    }
`

export const ListInput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
`;