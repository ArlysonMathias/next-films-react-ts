import * as Styled from "./style";


interface CardProps {
  name: string;
  image: string;
  description?: string;
}

const Card = ({name, image, description, ...props}: CardProps) => {
  return (
    <Styled.Card>
      <Styled.CardTitle>{name}</Styled.CardTitle>
      <Styled.CardContent>
        <Styled.CardImg src={image} alt={name} />
      </Styled.CardContent>
      <Styled.CardButtons>
        <Styled.CardButtonView> Assistir</Styled.CardButtonView>
        <Styled.CardButtonView> Mais...</Styled.CardButtonView>
      </Styled.CardButtons>
    </Styled.Card>
  );
};

export default Card;
