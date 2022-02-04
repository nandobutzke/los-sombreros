import { MdShoppingBasket } from "react-icons/md";
import { useCart } from "../../hooks/useCart";
import { StyledCartItemLink } from "./styles";

export function CartItem() {
    const { cart } = useCart();

    const cartSize = cart.length;

    return (
        <StyledCartItemLink to="/cart">
            <div>
                Meu carrinho 
                <span>{cartSize > 1 ? `${cartSize} itens` : `${cartSize} item`}</span>
            </div>
            
            <MdShoppingBasket size={45} />
        </StyledCartItemLink>
    );
}