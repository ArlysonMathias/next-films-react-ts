import { Film } from "../../types";
import Card from "../Card";
import * as Styled from "./style";

interface FilmsListProps {
  list: Film[];
}
const FilmsList = ({list}: FilmsListProps) => {
  return (
    <Styled.Main>
      {list.map((element) => (
        <Card film={element} key={element.id} />
      ))}
    </Styled.Main>
  );
};

export default FilmsList;
