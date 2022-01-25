import { StyledBackToHomeLink } from "./styles";
import backIcon from '../../assets/icons/back.svg';
import { useBackToHome } from "../../hooks/useBackToHome";

export function BackToHomeButton() {
    const { alterPage } = useBackToHome();

    return (
        <StyledBackToHomeLink to="/" onClick={() => alterPage(false)}>
            <img src={backIcon} alt="Back icon" />
        </StyledBackToHomeLink>
    );
}