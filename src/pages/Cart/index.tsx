import { data } from "../../data";
import { formatPrice } from "../../util/format";
import { StyledTable } from "./styles";

export function Cart() {
    return (
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
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                </tr>
            </tbody>
        </StyledTable>
    );
}