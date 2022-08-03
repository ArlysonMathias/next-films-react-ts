import { Film } from "../../types";
import * as Styled from "./style"


interface ButtonProps {
    text: string;
    onClick: () => Film[];
}

const ButtonHeader = ({ text, onClick}: ButtonProps) => {
    return (
        <Styled.StyledButton onClick={onClick}>
            {text}
        </Styled.StyledButton>
    )
}

export default ButtonHeader;