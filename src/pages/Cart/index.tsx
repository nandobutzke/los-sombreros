import { MdAddCircleOutline, MdDelete, MdRemoveCircleOutline } from "react-icons/md";
import { ProductsGrid } from "../../components/ProductsGrid";
import { data } from "../../data";
import { formatPrice } from "../../util/format";
import { Container, StyledTable, Total } from "./styles";

export function Cart() {
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
                    <tr>
                        <td>
                            <img src={data[0].img} alt="" />
                        </td>
                        <td>
                            <strong>{data[0].title}</strong>
                            <span>{formatPrice(data[0].price)}</span>
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
                                    value={1}
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
                            <strong>{formatPrice(data[0].price)}</strong>
                        </td>
                        <td>
                            <button>
                                <MdDelete size={20} />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={data[1].img} alt="" />
                        </td>
                        <td>
                            <strong>{data[1].title}</strong>
                            <span>{formatPrice(data[1].price)}</span>
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
                                    value={1}
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
                            <strong>{formatPrice(data[1].price)}</strong>
                        </td>
                        <td>
                            <button>
                                <MdDelete size={20} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </StyledTable>
            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{formatPrice(data[0].price)}</strong>
                </Total>
            </footer>
        </Container>
    );
}