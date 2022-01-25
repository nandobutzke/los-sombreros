import { ButtonStyled } from "./styles";
import { FaIceCream } from 'react-icons/fa'

interface ButtonProps {
    title: string;
    color?: string;
}

export function Button({ title }: ButtonProps) {
    return(
        <ButtonStyled>
            <FaIceCream />{title}
        </ButtonStyled>
    );
}