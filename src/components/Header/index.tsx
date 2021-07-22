import { HeaderContainer, StyledLink } from "./styles";
import logoImg from '../../assets/logo-los-sombreros.png';

export function Header() {
    return (
        <>
            <HeaderContainer>
                <div className="content-img">
                    <img src={logoImg} alt="Logo" />
                </div>
                <nav className="content-menu">
                    <ul>
                        <li><StyledLink to="/">Inicio</StyledLink></li>
                        <li><StyledLink to="/">Produtos</StyledLink></li>
                        <li><StyledLink to="/">Sobre</StyledLink></li>
                        <li><StyledLink to="/">Entre em contato</StyledLink></li>
                    </ul>
                </nav>
            </HeaderContainer>    
        </>
    );
}