import { HeaderContainer, StyledLink } from "./styles";
import logoImg from '../../assets/logo-los-sombreros.png';
import { CartItem } from "../CartItem";

export function Header() {
    return (
        <>
            <HeaderContainer>
                <div className="content-img">
                    <img src={logoImg} alt="Logo" />
                </div>
                <nav className="content-menu">
                    <StyledLink to="/">Inicio</StyledLink>
                    <StyledLink to="/products">Produtos</StyledLink>
                    <CartItem />
                </nav>
            </HeaderContainer>    
        </>
    );
}