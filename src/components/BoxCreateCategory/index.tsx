import { useNavigate } from "react-router-dom";
import { FormButton, Input } from "../Styles/styles";
import * as Styled from "./style";


const BoxCreateCategory = () => {
    const navigate = useNavigate()
    return (
        <Styled.BoxCreateCategory>
            <h1>Criar Categoria</h1>
            <Styled.BoxCreateCategoryForm>
            <Input type="text" placeholder="Nome da categoria" />
                <FormButton role="button" type="button">Registrar</FormButton>
            </Styled.BoxCreateCategoryForm>
        </Styled.BoxCreateCategory>
    )
}

export default BoxCreateCategory;