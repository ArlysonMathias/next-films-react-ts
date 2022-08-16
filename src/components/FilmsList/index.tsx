import { useEffect, useState } from "react";
import { Categories, Film } from "../../assets/types/types";
import { useCategory } from "../../context/categories";
import { useFilms } from "../../context/films";
import { api } from "../../Services";
import Card from "../Card";
import CategoriesComponent from "../CategoriesComponent";
import * as Styled from "./style";

type FilmListProps = {
  searchInputValue: string;
};

const FilmsList = ({ searchInputValue }: FilmListProps) => {
  const { films } = useFilms();
  const { category } = useCategory()

  const[categories, setCategories] = useState<Categories>(category[0])

  return (
    <Styled.Main>
      {searchInputValue !== ""
        ? films
            .filter((element) => {
              return element.name
                .toLowerCase()
                .includes(searchInputValue.toLowerCase());
            })
            .map((element, index) => {
              return <Card film={element} key={index} />;
            })
        : films.map((element, index) => {
            return <CategoriesComponent/>;
          })}
    </Styled.Main>
  );
};

export default FilmsList;
