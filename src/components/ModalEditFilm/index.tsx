import { Dispatch, SetStateAction } from "react";
import { Film } from "../../assets/types/types";
import Button from "../Button";
import { Input, ModalOverlay } from "../Styles/styles";
import * as Styled from "./style";

interface EditFilmModalProps {
  film: Film;  
  handleOpenModal: () => void;
  setFilm: Dispatch<SetStateAction<Film | undefined>>;
}

const ModalEditFilm = ({film, handleOpenModal, setFilm}: EditFilmModalProps) => {

  return (
    <ModalOverlay>
        <Styled.ModalOverlayContent>
        <h1>Editar Filme</h1>
        <Styled.ModalForm>
          <input type="text">{film.name}</input>
          <input type="text">{film.description}</input>
          <input type="text">{film.image}</input>
          <input type="text">{film.categoryId}</input>
        </Styled.ModalForm>
        <div>
            <Button text="Cancelar" 
              onClick={() => {
              setFilm(undefined);
              handleOpenModal()}} />
            <Button text="Editar" />
        </div>
        </Styled.ModalOverlayContent>
    </ModalOverlay>
  );
};

export default ModalEditFilm;
