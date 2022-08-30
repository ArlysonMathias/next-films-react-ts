import { Film } from "../../assets/types/types";
import Card from "../Card";
import * as S from "./style";

interface FilmsListProps {
  filmFilters: Film[];
}

const CategoriesComponent = ({ filmFilters }: FilmsListProps) => {

  return (
    <S.Row>    
    {filmFilters.map((element) => (
      <Card film={element} key={element.id}/>
    ))}
</S.Row>
  );
};

export default CategoriesComponent;
