import toast from "react-hot-toast";
import { Film } from "../../assets/types/types";
import { useModal } from "../../context/modal";
import ModalDeleteFilm from "../ModalDeleteFilm";
import * as Styled from "./style";

interface CardProps {
  film: Film;
}

const Card = ({ film }: CardProps) => {
  const {
    stateModalDelete,
    stateModalEdit,
    stateModalInfo,
    handleModalInfo,
    handleModalEdit,
    handleModalDelete,
  } = useModal();

  return (
    <Styled.Card>
      <Styled.CardContent>
        <Styled.CardImg src={film.image} alt={film.name} />
      </Styled.CardContent>
      <Styled.CardButtons>
        <div>
          <Styled.CardButtonView
            onClick={() => toast.error("Sessão em desenvolvimento.")}
          >
            {" "}
            Assistir
          </Styled.CardButtonView>
          <Styled.CardButtonView>Editar </Styled.CardButtonView>
        </div>
        <div>
          <Styled.CardButtonView
            onClick={() => toast.error("Sessão em desenvolvimento.")}
          >
            Mais...
          </Styled.CardButtonView>
          <Styled.CardButtonView
            onClick={() => {
              handleModalDelete();
              // console.log(film.id);
              // console.log(film.name);
            }}
          >
            Excluir
          </Styled.CardButtonView>
        </div>
        {stateModalDelete ? (
          <ModalDeleteFilm film={film} />
        ) : null}
      </Styled.CardButtons>
    </Styled.Card>
  );
};

export default Card;
