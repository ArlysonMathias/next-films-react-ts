import ButtonLarge from "../ButtonLarge";
import * as Styled from "./style"
import { useNavigate } from "react-router-dom";

const BoxCreateCategory = () => {
    const navigate = useNavigate()
    return (
        <Styled.BoxCreateCategory>
            <h1>Criar Categoria</h1>
            <Styled.BoxCreateCategoryForm>
            <input type="text" placeholder="Nome da categoria" />
                <ButtonLarge value="Registrar" type="button" />
            </Styled.BoxCreateCategoryForm>
            <p onClick={() => navigate("/")}>Voltar a página inicial</p>
        </Styled.BoxCreateCategory>
    )
}

export default BoxCreateCategory;