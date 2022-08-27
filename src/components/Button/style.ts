import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant?: "disabled" | "cancel";
  size?: "small" | "large" | "x-large";
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme, variant, size }) => css`
    width: 11rem;
    height: 3rem;
    border-radius: 8px;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
    box-shadow: 0px 8px 24px rgba(105, 234, 118, 0.2);
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
    margin-right: 10px;

    ${variant === "disabled" &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.primaryColor};
      border: 1px solid ${theme.colors.primaryColor};
      box-shadow: none;
    `}

    ${variant === "cancel" &&
    css`
      background-color: ${theme.colors.secundaryColor};
      color: ${theme.colors.textColor};
      box-shadow: none;
    `}

    ${size === "small" &&
    css`
      height: 2.125rem;
      padding: 0 0.75rem;
      width: 7.25rem;
    `}

    ${size === "large" &&
    css`
      width: 18.625rem;
    `}

    ${size === "x-large" &&
    css`
      width: 22.5rem;
    `}
  `}
`;
