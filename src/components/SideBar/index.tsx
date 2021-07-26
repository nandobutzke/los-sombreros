import { useState } from "react";
import { SideBarContainer, StyledFaBars } from "./styles";

export function SideBar() {
    const [sideBar, setSideBar] = useState('disabled');

    function handleHideSideBar(className: string) {
        setSideBar(className);
    }

    return(
        <SideBarContainer className={sideBar}>
            <StyledFaBars onClick={() => handleHideSideBar('disabled')} />
            <div className="title-content">
                <h1>Criadores</h1>
                <StyledFaBars onClick={() => handleHideSideBar('activate')} />
            </div>
        </SideBarContainer>
    );
}