import ButtonLarge from "../ButtonLarge";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";


const BoxRegisterFilm = () => {
  const navigate = useNavigate()
  return (
    <Styled.BoxRegisterFilm>
        <h1>Registrar um filme</h1>
      <Styled.BoxRegisterFilmForm>
        <input type="text" placeholder="Nome do filme" />
        <input type="text" placeholder="Id da Categoria" />
        <input type="text" placeholder="Descrição do filme" />
        <input type="text" placeholder="Link da imagem do filme" />
        <ButtonLarge value="Registrar Filme" type="button" />
      </Styled.BoxRegisterFilmForm>
      <p onClick={() => navigate("/")}>Voltar a página inicial</p>
    </Styled.BoxRegisterFilm>
  );
};

export default BoxRegisterFilm;
