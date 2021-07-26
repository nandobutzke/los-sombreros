import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const SideBarContainer = styled.nav`
    position: absolute;
    left: 0px;
    height: 100%;
    width: 32rem;
    z-index: 1000;
    background: #892344;

    .title-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        color: #FFF;
        padding: 20px 40px;
        font-size: 2.75rem;
    }

    &.activate {
        display: none;
    }

    &.disabled {
        display: block;
    }

    #open-sidebar {
        display: block;
    }
`;

export const StyledFaBars = styled(FaBars)`
    color: #FFF;
`;