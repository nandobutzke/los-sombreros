import { MdAddCircleOutline, MdDelete, MdOutlineShoppingBasket, MdRemoveCircleOutline } from "react-icons/md";
import { Button } from "../../components/Button";
import { localData } from "../../data";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../types";
import { formatPrice } from "../../util/format";
import { Container, StyledFinalizingPurchaseLink, StyledTable, Total } from "./styles";

export function Cart() {
    const { cart, removeProduct, updateProductAmount, calcTotalPurchase } = useCart();

    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        subTotal: formatPrice(product.price * product.amount)
    }));

    const total = 
    formatPrice(
        cart.reduce((sumTotal, product) => {
            return sumTotal + product.price * product.amount;
        }, 0)
    );

    function getImageById(localDataItemId: number) {
        const response = localData.findIndex(localDataItem => localDataItem.id === localDataItemId);
        
        return localData[response].image;
    }

    function handleProductIncrement(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount + 1 })
    }

    function handleProductDecrement(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount - 1 })
    }

    async function calculeTotalPurchase(total: string) {
        await calcTotalPurchase(total);
    }

    return (
        <Container>
            <StyledTable>
                <thead>
                    <tr>
                        <th arial-label="product image"></th>
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th arial-label="delete icon"></th>
                    </tr>
                </thead>
                <tbody>
                    {cartFormatted.length > 0 ? cartFormatted.map(product => (
                        <tr>
                            <td>
                                <img src={getImageById(product.id)} alt="" />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{formatPrice(product.price)}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        disabled={product.amount <= 1}
                                        onClick={() => handleProductDecrement(product)}
                                    >
                                        <MdRemoveCircleOutline size={20} />
                                    </button>
                                    <input 
                                        type="text"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleProductIncrement(product)}
                                    >
                                        <MdAddCircleOutline size={20} />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subTotal}</strong>
                            </td>
                            <td>
                                <button onClick={() => removeProduct(product.id)}>
                                    <MdDelete size={20} />
                                </button>
                            </td>
                        </tr>
                    )) : <span>O carrinho está vazio.</span>}
                </tbody>
            </StyledTable>
            <footer>
                <StyledFinalizingPurchaseLink to="/payment">
                    <Button 
                        type="button"
                        title="Finalizar pedido"
                        icon={<MdOutlineShoppingBasket />}
                        onClick={() => calculeTotalPurchase(total)}
                    />
                </StyledFinalizingPurchaseLink>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}