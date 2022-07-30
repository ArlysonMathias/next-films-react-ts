import * as Styled from "./style";
import Logo from "../../assets/icons/logo.png";
import ButtonLarge from "../ButtonLarge";


const BoxLogin = () => {
  return (
    <Styled.BoxLogin>
      <Styled.BoxLoginLogo src={Logo} alt="Logo" />
      <Styled.BoxLoginForm>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder='Senha' />
      </Styled.BoxLoginForm>
      <ButtonLarge value="Entrar" type="button"/>
      <p> Não tem uma conta? <a href="/register">Cadastre-se</a></p>
    </Styled.BoxLogin>    
  );
};

export default BoxLogin;
