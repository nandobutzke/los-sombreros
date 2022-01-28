import { darken } from "polished";
import styled from "styled-components";

export const ProductContainer = styled.div`
    padding: 1.25rem;
    border: 2.5px solid #ff213f;
    border-radius: 0.25rem;

    display: flex;
    flex-direction: column;
    
    gap: 1rem;

    transition: background 0.2s;

    img { 
        width: 50%;
    }

    .melanciaImg {
        width: 28%;
    }

    .card-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .data-text-content {
        width: 50%;

        h3 {
            font-size: 2.50rem;
            color: #ff213f;
            transition: color 0.2s;
        }

        p {
            color: #ad1a2e;
        } 
    }

    

    /* &:hover {
        background: #ff213f;

        h3 {
            font-size: 2.50rem;
            color: #FFF;
        }

        p {
            color: #FFF;
        }
    } */
`;

export const AddToCartButton = styled.button`
    font: 16px "Poppins", sans-serif;
    border: none;
    background: #ff213f;
    color: #FFF;
    border-radius: 0.25rem;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    
    div {
        display: flex;
        justify-content: space-between;
        gap: 0.35rem;
        padding: 12px;

        svg {
            font-size: 1.4rem;
        }
    }

    span {
        flex: 1;
        text-align: center;
        
    }

    cursor: pointer;

    transition: background 0.2s;

    &:hover {
        background: ${darken(0.2, '#ff213f')};
    }

`;
