import { useState } from "react";
import toast from "react-hot-toast";
import { Film } from "../../assets/types/types";
import ModalEditFilm from "../ModalEditFilm";
import * as Styled from "./style";


interface CardProps {
  film: Film;
}

const Card = ({film}: CardProps) => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };


  return (
    <Styled.Card>
      <Styled.CardContent>
        <Styled.CardImg src={film.image} alt={film.name} />
      </Styled.CardContent>
      <Styled.CardButtons>
        <div>
          <Styled.CardButtonView onClick={()=> toast.error("Sessão em desenvolvimento.")}> Assistir</Styled.CardButtonView>
          <Styled.CardButtonView onClick={handleOpenModal}> Mais...</Styled.CardButtonView>
        </div>
        <div>
          <Styled.CardButtonView onClick={() => setOpenModal(true)}>Editar</Styled.CardButtonView>
          {openModal ? <ModalEditFilm/> : null }
          <Styled.CardButtonView>Excluir</Styled.CardButtonView>
        </div>
      </Styled.CardButtons>
    </Styled.Card>
  );
};

export default Card;
