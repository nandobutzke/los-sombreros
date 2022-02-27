import { red } from "@radix-ui/colors";
import { Flex, Label, PaymentFooterContainer, PaymentMethodRadioGroupContainer, RadioGroup, RadioGroupRadio } from "./styles";
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { styled } from "@stitches/react";
import { FaBarcode, FaCreditCard, FaMoneyBill  } from "react-icons/fa";
import { Button } from "../Button";
import {  } from "react-icons/md";
import { useCart } from "../../hooks/useCart";
import pixLogo from '../../assets/icons/pix-logo.svg';

export const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  "&::after": {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: red.red10
  },
});

export const RadioGroupIndicator = StyledIndicator;

export function PaymentMethodRadioGroup() {
  const { totalPurchase } = useCart();

  return (
    <PaymentMethodRadioGroupContainer>
      <form>
        <RadioGroup defaultValue="default" aria-label="View density">
          <Flex css={{ margin: '30px 0', alignItems: 'center' }}>
            <RadioGroupRadio value="ticket" id="r1">
              <RadioGroupIndicator />
            </RadioGroupRadio>
            <Label htmlFor="r1">Boleto <FaBarcode /></Label>
          </Flex>
          <Flex css={{ margin: '30px 0', alignItems: 'center' }}>
            <RadioGroupRadio value="credit-card" id="r2">
              <RadioGroupIndicator />
            </RadioGroupRadio>
            <Label htmlFor="r2">Cartão de crédito <FaCreditCard /></Label>
          </Flex>
          <Flex css={{ margin: '30px 0', alignItems: 'center' }}>
            <RadioGroupRadio value="pix" id="r3">
              <RadioGroupIndicator />
            </RadioGroupRadio>
            <Label htmlFor="r3">PIX <img src={pixLogo} alt="Pix" width={20} height={20} /></Label>
          </Flex>
        </RadioGroup>
      </form>
      <PaymentFooterContainer>
        <Flex css={{ margin: '30px 0', alignItems: 'center' }}>
          <Button 
            type="submit" 
            title="Concluir pagamento" 
            icon={<FaMoneyBill />} 
          />
        </Flex>
        <div className="total-footer-details">
          <span>TOTAL</span>
          <strong>{totalPurchase}</strong>
        </div>
      </PaymentFooterContainer>
    </PaymentMethodRadioGroupContainer>
  );
}