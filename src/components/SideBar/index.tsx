import { SideBarContainer, StyledFaBars } from "./styles";

export function SideBar() {
    return(
        <SideBarContainer>
            <div className="title-content">
                <h1>Criadores</h1>
                <StyledFaBars />
            </div>
        </SideBarContainer>
    );
}