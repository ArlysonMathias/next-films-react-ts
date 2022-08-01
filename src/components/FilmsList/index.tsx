import { data } from "../../mocks/data.json";
import Card from "../Card";
import * as Styled from "./style";

const FilmsList = () => {
  return (
    <Styled.Main>
      {data.map((film) => {
        return <Card image={film.image} name={film.name} />;
      })}
    </Styled.Main>
  );
};

export default FilmsList;
