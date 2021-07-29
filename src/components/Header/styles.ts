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
        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            
            list-style: none;
            gap: 20px;
        }
    }
`;

export const StyledLink = styled(Link)`
    color: #444;
    text-decoration: none;
`;