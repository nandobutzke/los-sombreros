import { AddressList } from "../../components/AddressList";
import { PaymentContainer } from "./styles";

export function Payment() {
    return (
        <PaymentContainer>
            <AddressList />
        </PaymentContainer>
    );
}