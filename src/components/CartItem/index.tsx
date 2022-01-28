import { MdShoppingBasket } from "react-icons/md";
import { StyledCartItemLink } from "./styles";

export function CartItem() {
    return (
        <StyledCartItemLink to="/cart">
            <div>
                Meu carrinho 
                <span>{0} itens</span>
            </div>
            
            <MdShoppingBasket size={45} />
        </StyledCartItemLink>
    );
}