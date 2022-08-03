import * as Styled from "./style";
import Logo from "../../assets/icons/logo.png";
import ButtonLarge from "../ButtonLarge";
import { useNavigate } from "react-router-dom";

const BoxRegister = () => {
  const  navigate = useNavigate();
  return (
    <Styled.BoxRegister>
      <Styled.BoxRegisterLogo src={Logo} alt="Logo" />
      <Styled.BoxRegisterForm>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <input type="password" placeholder="Confirme sua senha" />
        <input type="number" placeholder="Digite seu cpf" />
      </Styled.BoxRegisterForm>
      <ButtonLarge value="Registrar" type="button" />
      <Styled.BoxRegisterFooter>
        <p> Já possui uma conta? <button onClick={() => navigate("/login")}>Fazer login</button> </p>
      </Styled.BoxRegisterFooter>
    </Styled.BoxRegister>
  );
};

export default BoxRegister;
