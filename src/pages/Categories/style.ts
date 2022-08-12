import styled, { css } from "styled-components";

export const Main = styled.section`
    ${({theme}) => css`
        background-color: ${theme.colors.primaryColor};
    `};
`;