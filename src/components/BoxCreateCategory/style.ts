import styled, { css } from "styled-components";

export const BoxCreateCategory = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 345px;
    height: 300px;
    padding-bottom: 3rem ;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.opacityColor};

    h1 {
      color: ${theme.colors.textColor};
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 2rem;
    }
  `};
`;

export const BoxCreateCategoryForm = styled.form`
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 14px;
  box-sizing: border-box;
`;
