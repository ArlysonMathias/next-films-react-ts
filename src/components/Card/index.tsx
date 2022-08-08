import { Film } from "../../assets/types/types";
import * as Styled from "./style";


interface CardProps {
  film: Film;
}

const Card = ({film}: CardProps) => {
  return (
    <Styled.Card>
      <Styled.CardTitle>{film.name}</Styled.CardTitle>
      <Styled.CardContent>
        <Styled.CardImg src={film.image} alt={film.name} />
      </Styled.CardContent>
      <Styled.CardButtons>
        <Styled.CardButtonView> Assistir</Styled.CardButtonView>
        <Styled.CardButtonView> Mais...</Styled.CardButtonView>
      </Styled.CardButtons>
    </Styled.Card>
  );
};

export default Card;
