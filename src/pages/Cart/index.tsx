import { MdAddCircleOutline, MdDelete, MdRemoveCircleOutline } from "react-icons/md";
import { localData } from "../../data";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, StyledTable, Total } from "./styles";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

export function Cart() {
    const { cart, removeProduct } = useCart();

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
                    {cartFormatted.length > 0 ? cart.map(product => (
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
                                        disabled={true}
                                        onClick={() => {}}
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
                                        onClick={() => {}}
                                    >
                                        <MdAddCircleOutline size={20} />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{}</strong>
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
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{formatPrice(0)}</strong>
                </Total>
            </footer>
        </Container>
    );
}