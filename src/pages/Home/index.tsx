import Logo from "../../assets/icons/logo.png";
import FilmsList from "../../components/FilmsList";
import Search from "../../components/Search";
import * as Styled from "./style";

const Home = () => {
  return (
    <Styled.Home>
      <Styled.HomeHeader>
        <Styled.HomeHeaderLogo src={Logo} />
        <Styled.HomeHeaderMenu>
          <a href="/">Início</a>
          <a href="##">Favoritos</a>
          <a href="##">Categorias</a>
        </Styled.HomeHeaderMenu>
        <Search />
        <span>
          <Styled.HomeHeaderMenu2>
            <a href="/login">Sair</a>
          </Styled.HomeHeaderMenu2>
        </span>
      </Styled.HomeHeader>
      <FilmsList/>
    </Styled.Home>
  );
};

export default Home;
