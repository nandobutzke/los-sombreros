import { ReactNode } from "react";
import { AddressList } from "../AddressList";
import { PaymentMethods } from "../PaymentMethods";
import { AccordionContent } from "./AccordionContent";
import { AccordionTrigger } from "./AccordionTrigger";
import { StyledAccordion, StyledChevron, StyledContent, StyledContentText, StyledHeader, StyledItem, StyledTrigger } from "./styles";

//export const Accordion  = StyledAccordion;
export const AccordionItem = StyledItem;

export interface ReactRefProps {
    children: ReactNode;
}

export function AccordionDemo() {
    return (
        <StyledAccordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
              <AccordionTrigger>Endereço</AccordionTrigger>
              <AccordionContent>
                <AddressList />
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
              <AccordionTrigger>Forma de pagamento</AccordionTrigger>
              <AccordionContent>
                <PaymentMethods />
              </AccordionContent>
          </AccordionItem>
      </StyledAccordion>
    );
}