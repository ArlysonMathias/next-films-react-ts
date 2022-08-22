import Button from "../Button";
import { Input } from "../Styles/styles";
import * as Styled from "./style";

const FilmModal = () => {
  return (
    <Styled.ModalOverlay>
      <Styled.InputRegisterForm>
        <Input type="text" placeholder="Nome do filme" />
        <Input type="text" placeholder="Id da Categoria" />
        <Input type="text" placeholder="Descrição do filme" />
        <Input type="text" placeholder="Link da imagem do filme" />
        <div>
            <Button text="Cancelar"/>
            <Button text="Registrar"/>
        </div>
      </Styled.InputRegisterForm>
    </Styled.ModalOverlay>
  );
};

export default FilmModal;
