import { ButtonStyled } from "./styles";

interface ButtonProps {
    title: string;
    color?: string;
}

export function Button(props: ButtonProps) {
    return(
        <ButtonStyled>{props.title}</ButtonStyled>
    );
}