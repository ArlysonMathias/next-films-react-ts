import * as Styled from './style';

interface ButtonProps {
    value: string;
    type: string;
    onClick?: ()=> void;
}

const ButtonLarge = ({value, type ,...props}: ButtonProps) => {
    return (
        <Styled.ButtonLarge {...props}> {value}</Styled.ButtonLarge>
    )
}

export default ButtonLarge;