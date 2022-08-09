import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import { Film } from "../../assets/types/types";
import { mockedFilms } from "../../mocks";
import Card from "../Card";
import Header from "../Header";
import * as Styled from "./style";

type FilmListProps = {
  searchInputValue: string;
  handleSearchInputChange: (
    event: React.ChangeEvent<{ value: string }>
  ) => void;
  getFilms: () => void
};

const FilmsList = ({
  searchInputValue,
  handleSearchInputChange,
}: FilmListProps) => {
  const list = mockedFilms;

  return (
    <Styled.Main>
      <Header
        searchInputValue={searchInputValue}
        handleSearchInputChange={handleSearchInputChange}
      />
      {searchInputValue !== ""
        ? list
            .filter((element) => {
              return element.name.toLowerCase().includes(searchInputValue.toLowerCase());
            })
            .map((element, index) => {
              return <Card film={element} key={index} />;
            })
        : list.map((element, index) => {
            return <Card film={element} key={index} />;
          })}
    </Styled.Main>
  );
};

export default FilmsList;
