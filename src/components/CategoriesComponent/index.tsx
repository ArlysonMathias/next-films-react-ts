import { Film } from "../../assets/types/types";
import Card from "../Card";
import * as S from "./style";

interface FilmsListProps {
  filmFilters: Film[];
}

const CategoriesComponent = ({ filmFilters }: FilmsListProps) => {
  return (
    <S.Row>    
    {filmFilters.map((element, index) => (
        <Card film={element} key={index}/>
    ))}
</S.Row>
  );
};

export default CategoriesComponent;
