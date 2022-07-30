import * as Styled from "./style";
import Logo from "../../assets/icons/logo.png";
import ButtonLarge from "../ButtonLarge";

const BoxRegister = () => {
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
      <p> Já possui uma conta? <a href="/login">Fazer login</a></p>
    </Styled.BoxRegister>
  );
};

export default BoxRegister;
