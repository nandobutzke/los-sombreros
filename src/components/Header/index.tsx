import { HeaderContainer, StyledLink } from "./styles";
import logoImg from '../../assets/logo-los-sombreros.png';
import { BackToHomeButton } from "../BackToHomeButton";
import { useBackToHome } from "../../hooks/useBackToHome";
import { CartItem } from "../CartItem";

export function Header() {
    const { isOtherPage, alterPage } = useBackToHome();

    return (
        <>
            <HeaderContainer>
                <div className="content-img">
                    { isOtherPage ? <BackToHomeButton /> : <img src={logoImg} alt="Logo" />}
                </div>
                <nav className="content-menu">
                    <StyledLink to="/" onClick={() => alterPage(false)}>Inicio</StyledLink>
                    <StyledLink to="/products" onClick={() => alterPage(true)}>Produtos</StyledLink>
                    <StyledLink to="/" onClick={() => alterPage(true)}>Sobre</StyledLink>
                    <StyledLink to="/" onClick={() => alterPage(true)}>Entre em contato</StyledLink>
                    <CartItem />
                </nav>
            </HeaderContainer>    
        </>
    );
}