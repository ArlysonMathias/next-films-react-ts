import Logo from "../../assets/icons/logo.png";
import FilmsList from "../../components/FilmsList";
import Search from "../../components/Search";
import { mockedFilms, mockedCategories } from "../../mocks";
import { useState } from "react";
import * as Styled from "./style";
import { Film } from "../../types";


const Home = () => {

  // const[selectedCategory, setSelectedCategory] = useState<string>(mockedCategories[0].name)

  // const[films, setFilms] = useState<Film[]>(mockedFilms[])

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
      <FilmsList list={mockedFilms}/>
    </Styled.Home>
  );
};

export default Home;
