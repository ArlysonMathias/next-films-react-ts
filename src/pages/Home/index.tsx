import { useEffect } from "react";
import FilmsList from "../../components/FilmsList";
import Header from "../../components/Header";
import { mockedFilms } from "../../mocks";
import * as Styled from "./style";

const getFilms = () => mockedFilms;

const Home = () => {

  useEffect(() => {
    getFilms()
  },[])

  return (
    <Styled.Home>
      <Header/>
      <FilmsList list={getFilms()} />
    </Styled.Home>
  );
};

export default Home;
