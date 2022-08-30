import { useState } from "react";
import toast from "react-hot-toast";
import { Film } from "../../assets/types/types";
import { useModal } from "../../context/modal";
import ModalDeleteFilm from "../ModalDeleteFilm";
import ModalEditFilm from "../ModalEditFilm";
import * as Styled from "./style";

interface CardProps {
  film: Film;
}

const Card = ({ film }: CardProps) => {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const handleModalDelete = () => {
    setOpenModalDelete(!openModalDelete);
  };
  const handleModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };

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
          <Styled.CardButtonView onClick={handleModalEdit}>
            Editar{" "}
          </Styled.CardButtonView>
        </div>
        <div>
          <Styled.CardButtonView>Mais...</Styled.CardButtonView>
          {openModalEdit ? (
            <ModalEditFilm film={film} handleModalEdit={handleModalEdit} />
          ) : null}
          <Styled.CardButtonView
            onClick={() => {
              handleModalDelete();
            }}
          >
            Excluir
          </Styled.CardButtonView>
        </div>
        {openModalDelete ? (
          <ModalDeleteFilm
            filmId={film.id}
            filmName={film.name}
            handleModalDelete={handleModalDelete}
          />
        ) : null}
      </Styled.CardButtons>
    </Styled.Card>
  );
};

export default Card;
