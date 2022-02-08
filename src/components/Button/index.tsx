import { ButtonStyled } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
    icon: ReactNode;
    title: string;
    color?: string;
}

export function Button({ icon, title }: ButtonProps) {
    return(
        <ButtonStyled>
            {icon}{title}
        </ButtonStyled>
    );
}