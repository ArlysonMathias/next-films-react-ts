import { useEffect, useState } from "react";
import FilmsList from "../../components/FilmsList";
import Header from "../../components/Header";
import { mockedFilms } from "../../mocks";

import * as Styled from "./style";


const Home = () => {

  // input e valor do input
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
       <Header
        searchInputValue={searchInputValue}
        handleSearchInputChange={handleSearchInputChange}
      />
      <FilmsList getFilms={getFilms} searchInputValue={searchInputValue} />
    </Styled.Home>
  );
};

export default Home;
