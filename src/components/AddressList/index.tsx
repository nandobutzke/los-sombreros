import { MdAddLocation, MdDeliveryDining, MdHomeMax, MdHouse, MdWork } from "react-icons/md";
import { Button } from "../Button";
import { AddressListContainer } from "./styles";

export function AddressList() {
    return (
        <AddressListContainer>
            <Button icon={<MdAddLocation />} title="Adicionar Endereço" />
            <ul>
                <li>
                    <div>
                        <strong>Rua Azeroth, Nº 822</strong>
                        <span>Manhattan, Nova Iorque</span>
                    </div>
                    <MdHouse size={36} />
                </li>
                <li>
                    <div>
                        <strong>Rua Palmeiras, Nº 521</strong>
                        <span>Manhattan, Nova Iorque</span>
                    </div>
                    <MdWork size={36} />
                </li>
            </ul>
        </AddressListContainer>
    );
}