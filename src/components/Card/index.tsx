import { useState } from "react";
import toast from "react-hot-toast";
import { Film } from "../../assets/types/types";
import { useModal } from "../../context/modal";
import ModalDeleteFilm from "../ModalDeleteFilm";
import ModalEditFilm from "../ModalEditFilm";
import ModalInfo from "../ModalInfo";
import * as Styled from "./style";

interface CardProps {
  film: Film;
}

const Card = ({ film }: CardProps) => {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalInfo, setOpenModalInfo] = useState<boolean>(false);

  //abrir e fechar modal delete
  const handleModalDelete = () => {
    setOpenModalDelete(!openModalDelete);
  };

  //abrir e fechar modal de edição
  const handleModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };

  //abrir e fechar modal de informação
  const handleModalInfo = () => {
    setOpenModalInfo(!openModalInfo);
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
          {openModalEdit ? (
            <ModalEditFilm film={film} handleModalEdit={handleModalEdit} />
          ) : null}
        </div>
        <div>
          <Styled.CardButtonView onClick={handleModalInfo}>Mais...</Styled.CardButtonView>
          {
            openModalInfo ? ( <ModalInfo film={film} handleModalInfo={handleModalInfo}/>) : null
          }
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
