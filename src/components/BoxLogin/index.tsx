import * as Styled from "./style";
import Logo from "../../assets/icons/logo.png";
import ButtonLarge from "../ButtonLarge";
import { useNavigate } from "react-router-dom";

const BoxLogin = () => {
  const navigate = useNavigate();
  return (
    <Styled.BoxLogin>
      <Styled.BoxLoginLogo src={Logo} alt="Logo" />
      <Styled.BoxLoginForm>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
      </Styled.BoxLoginForm>
      <ButtonLarge value="Entrar" type="button" onClick={() => navigate("/")} />
      <Styled.BoxLoginFooter>
        <p>
          {" "}
          Não tem uma conta?{" "}
          <button onClick={() => navigate("/register")}>Cadastre-se</button>
        </p>
      </Styled.BoxLoginFooter>
    </Styled.BoxLogin>
  );
};

export default BoxLogin;
