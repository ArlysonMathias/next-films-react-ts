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
  const { category } = useCategory();

  // const[categories, setCategories] = useState<Categories>(category[0] || ({} as Categories))

  const filteredFilms = (propId: Categories) =>
    films.filter((element) => category && element.categoryId === propId.id);

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
              return (
                <Styled.ListInput>
                  <Card film={element} key={index} />;
                </Styled.ListInput>
              );
            })
        : category.map((element) => {
            return (
              <Styled.ListFilms>
                <h2>{element.name}</h2>
                <CategoriesComponent
                  key={element.id}
                  filmFilters={filteredFilms(element)}
                />
              </Styled.ListFilms>
            );
          })}
    </Styled.Main>
  );
};

export default FilmsList;
