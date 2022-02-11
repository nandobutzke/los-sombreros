import { ButtonStyled } from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    title: string;
    color?: string;
}

export function Button({ icon, title, ...rest }: ButtonProps) {
    return(
        <ButtonStyled {...rest}>
            {icon}{title}
        </ButtonStyled>
    );
}