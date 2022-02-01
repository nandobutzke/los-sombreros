import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
    color: #444;
    text-decoration: none;
    
    &:active { color: lime }
`;