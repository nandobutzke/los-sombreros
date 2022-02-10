import { RadioGroupIndicator } from "@radix-ui/react-radio-group";
import { Flex, Label, RadioGroup, RadioGroupRadio } from "./styles";

export const PaymentMethodRadioGroup = () => (
  <form>
    <RadioGroup defaultValue="default" aria-label="View density">
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="default" id="r1">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="r1">Boleto</Label>
      </Flex>
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="comfortable" id="r2">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="r2">Cartão de crédito</Label>
      </Flex>
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="compact" id="r3">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="r3">PIX</Label>
      </Flex>
    </RadioGroup>
  </form>
);