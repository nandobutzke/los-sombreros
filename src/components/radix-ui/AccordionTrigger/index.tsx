import { forwardRef } from "react";
import { ReactRefProps } from "..";
import { StyledChevron, StyledHeader, StyledTrigger } from "../styles";


export const AccordionTrigger = forwardRef(({ children, ...props }: ReactRefProps, forwardedRef: React.Ref<HTMLButtonElement> | undefined) => (
    <StyledHeader>
        <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
        </StyledTrigger>
    </StyledHeader>
));
  