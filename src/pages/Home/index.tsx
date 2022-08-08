import { useEffect, useState } from "react";
import FilmsList from "../../components/FilmsList";
import { mockedFilms } from "../../mocks";

import * as Styled from "./style";

// const films = mockedFilms

const Home = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const handleSearchInputChange = (event: React.ChangeEvent<{value: string}>)=> {
    setSearchInputValue(event.target.value);
  };

 const getFilms = ()=>{
    mockedFilms
 }

 useEffect(()=> {
  getFilms
 }, [])

  return (
    <Styled.Home>
      <FilmsList getFilms={getFilms} searchInputValue={searchInputValue} handleSearchInputChange={handleSearchInputChange} />
    </Styled.Home>
  );
};

export default Home;
