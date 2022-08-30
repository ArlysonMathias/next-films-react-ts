import toast from "react-hot-toast";
import { useFilms } from "../../context/films";
import { api } from "../../Services";
import Button from "../Button";
import { ModalOverlay } from "../Styles/styles";
import * as Styled from "./style";

interface DeleteFilmModalProps {
  filmId: string | undefined;
  filmName: string;
  handleModalDelete: () => void;
}

const ModalDeleteFilm = ({
  filmId,
  filmName,
  handleModalDelete,
}: DeleteFilmModalProps) => {
  console.log(filmName);

  const { handleGetFilms } = useFilms();

  const handleDeleteFilm = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .delete(`films/${filmId}`, headers)
      .then(() => {
        toast.success("Filme excluído com sucesso");
        handleGetFilms();
      })
      .catch(() => toast.error("Id de filme não encontrado"));
  };

  return (
    <ModalOverlay>
      <Styled.DeleteModalContainer>
        <h2>Excluir o filme {filmName}?</h2>
        <div>
          <Button text="Cancelar" onClick={handleModalDelete} />
          <Button text="Excluir" onClick={handleDeleteFilm} />
        </div>
      </Styled.DeleteModalContainer>
    </ModalOverlay>
  );
};

export default ModalDeleteFilm;
