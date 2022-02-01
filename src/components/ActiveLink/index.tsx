import { ReactNode } from "react";
import { useLocation } from "react-router";
import { Link, LinkProps } from "react-router-dom";

interface ActiveLinkProps extends LinkProps {
    children: ReactNode;
    address: string;
    activeClassName: string;
}

export function ActiveLink({ children, address, activeClassName, ...rest }: ActiveLinkProps) {
    const location = useLocation();

    const className = location.pathname === rest.hrefLang
        ? activeClassName
        : '';

    return <Link to={address}></Link>
}