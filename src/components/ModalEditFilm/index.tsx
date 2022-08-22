import Button from "../Button";
import * as Styled from "./style";

const ModalEditFilm = () => {
  return (
    <Styled.ModalOverlay>
        <Styled.ModalOverlayContent>
        <h1>Editar Filme</h1>
        <Styled.ModalForm>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
        </Styled.ModalForm>
        <div>
            <Button text="Editar" />
            <Button text="Excluir" />
        </div>
        </Styled.ModalOverlayContent>
    </Styled.ModalOverlay>
  );
};

export default ModalEditFilm;
