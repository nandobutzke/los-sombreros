import { HeaderContainer } from "./styles";
import logoImg from '../../assets/logo-los-sombreros.png';
import { CartItem } from "../CartItem";
import { ActiveLink } from "../ActiveLink";

export function Header() {

    return (
        <>
            <HeaderContainer>
                <div className="content-img">
                    <img src={logoImg} alt="Logo" />
                </div>
                <nav className="content-menu">
                    <ActiveLink to="/">Inicio</ActiveLink>
                    <ActiveLink to="/products">Produtos</ActiveLink>
                    <CartItem />
                </nav>
            </HeaderContainer>    
        </>
    );
}