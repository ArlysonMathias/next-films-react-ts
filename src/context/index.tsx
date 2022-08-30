import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { AuthProvider } from "./auth";
import { CategoryProvider } from "./categories";
import { FilmsProvider } from "./films";
import { ModalProvider } from "./modal";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ModalProvider>
            <CategoryProvider>    
              <FilmsProvider>{children}</FilmsProvider>
            </CategoryProvider>
          </ModalProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
