import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto 200px;
    
    .content-img {
        img { 
            width: 200px;
        }
    }

    .content-menu { 
        display: flex;
        align-items: center;
        justify-content: center;
        
        list-style: none;
        gap: 2.2rem;
    }
`;

export const StyledLink = styled(NavLink)`
    color: #444;
    text-decoration: none;
    display: inline-block;
    position: relative;
    //line-height: 5rem;
    
    &.active { 
        font-weight: bold;
    }

    &.active::after {
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        border-radius: 0 0 3px 3px;
        bottom: 0;
        left: 0;
        background: #ff213f;
    }
`;