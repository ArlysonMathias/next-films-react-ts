import { mockedFilms } from "../../mocks";
import Card from "../Card";
import Header from "../Header";
import * as Styled from "./style";

type FilmListProps = {
  searchInputValue: string; 
  getFilms: () => void
};

const FilmsList = ({
  searchInputValue,
}: FilmListProps) => {
  const list = mockedFilms;

  return (
    <Styled.Main>
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
