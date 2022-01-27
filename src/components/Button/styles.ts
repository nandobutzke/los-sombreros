import { darken } from 'polished';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
    padding: 12px 12px;
    font: 16px "Poppins", sans-serif;
    border: none;
    background: #ff213f;
    color: #FFF;
    border-radius: 0.25rem;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg {
        font-size: 1.4rem;
    }
    
    cursor: pointer;
    
    transition: background 0.2s;
    
    &:hover {
        background: ${darken(0.06, '#ffffff')};
        
        box-shadow: inset 0 0 0 0.15rem #ff213f;
        
        box-sizing: border-box;
        color: #ff213f;
    }
`;