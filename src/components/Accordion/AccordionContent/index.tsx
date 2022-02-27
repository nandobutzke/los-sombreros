import { forwardRef } from "react";
import { ReactRefProps } from "..";
import { StyledContent, StyledContentText } from "../styles";

export const AccordionContent = forwardRef(({ children, ...props }: ReactRefProps, forwardedRef: React.Ref<HTMLDivElement> | undefined) => (
    <StyledContent {...props} ref={forwardedRef}>
        <StyledContentText>{children}</StyledContentText>
    </StyledContent>
));
  