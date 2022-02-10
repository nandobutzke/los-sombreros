import { PaymentMethodRadioGroup } from "../PaymentMethodRadioGroup";
import { PaymentMethodsContainer } from "./styles";

export function PaymentMethods() {
    return (
        <PaymentMethodsContainer>
            <PaymentMethodRadioGroup />
        </PaymentMethodsContainer>
    );
}