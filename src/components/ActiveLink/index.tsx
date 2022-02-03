import { ReactNode } from "react";
import { useLocation } from "react-router";
import { LinkProps } from "react-router-dom";
import { StyledLink } from "../Header/styles";

interface ActiveLinkProps extends LinkProps {
    children: ReactNode;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
    const location = useLocation();

    const className = location.pathname === rest.to ? '' : '';

    return <StyledLink to={rest.to} className={className}>{children}</StyledLink>
}