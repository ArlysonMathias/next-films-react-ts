import * as Styled from "./style";
import Logo from "../../assets/icons/logo.png";
import  Search  from "../Search/index";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  return (
    <Styled.Header>
      <Styled.HeaderLogo src={Logo} />
      <Styled.HeaderMenu>
        <button onClick={() => navigate("/")}>Início</button>
        <button>Categorias</button>
        <button>Favoritos</button>
        <button onClick={() => navigate("/login")}>Sair</button>
      </Styled.HeaderMenu>
      <Search/>
    </Styled.Header>
  );
};

export default Header;
