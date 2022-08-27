import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { Film } from "../../assets/types/types";
import { useFilms } from "../../context/films";
import { useModal } from "../../context/modal";
import { api } from "../../Services";
import Button from "../Button";
import { ModalOverlay } from "../Styles/styles";
import * as Styled from "./style";

interface DeleteFilmModalProps {
  film: Film;
  setFilm?: Dispatch<SetStateAction<Film | undefined>>;
}

const ModalDeleteFilm = ({ film }: DeleteFilmModalProps) => {
  
  console.log(film)

  const { handleGetFilms } = useFilms();
  const { handleModalDelete } = useModal();


  

  const handleDeleteFilm = () => {
    const token = localStorage.getItem("token");

  

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const verifyFilm = film.id
    

    api
      .delete(`films/${film.id}`, headers)
      .then(() => {
        toast.success("Filme excluído com sucesso");
        handleGetFilms();
      })
      .catch(() => toast.error("Id de filme não encontrado"));
  };

  return (
    <ModalOverlay>
      <Styled.DeleteModalContainer>
        <h2>Excluir o filme {film.name}?</h2>
        <div>
          <Button text="Cancelar" onClick={handleModalDelete} />
          <Button text="Excluir" onClick={handleDeleteFilm} />
        </div>
      </Styled.DeleteModalContainer>
    </ModalOverlay>
  );
};

export default ModalDeleteFilm;
