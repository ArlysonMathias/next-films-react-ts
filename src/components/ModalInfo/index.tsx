import { Film } from "../../assets/types/types";
import Button from "../Button";
import { ModalOverlay } from "../Styles/styles";
import * as Styled from "./style";

interface ViewFilmModalProps {
  film: Film;
  handleModalInfo: () => void;
}

const ModalInfo = ({ film, handleModalInfo }: ViewFilmModalProps) => {
  return (
    <ModalOverlay>
      <Styled.Content>
        <div>
          <img src={film.image} width="25%" />
          <h2>{film.name}</h2>
          <p>{film.description}</p>
        </div>
        <Button text="Fechar" onClick={handleModalInfo} />
      </Styled.Content>
    </ModalOverlay>
  );
};

export default ModalInfo;
