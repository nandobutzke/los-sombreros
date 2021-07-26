import styled from "styled-components";

export const ProductContainer = styled.div`
    padding: 25px;
    border: 2.5px solid #ff213f;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 20px;

    transition: background 0.2s;

    img { 
        width: 50%;
    }

    .melanciaImg {
        width: 28%;
    }

    .product-text-content {
        width: 50%;

        h3 {
            font-size: 2.50rem;
            color: #ff213f;

            transition: color 0.2s;
        }

        p {
            color: #ad1a2e;

            transition: color 0.2s;
        }
    }

    &:hover {
        background: #ff213f;

        .product-text-content {
            width: 50%;

            h3 {
                font-size: 2.50rem;
                color: #FFF;
            }

            p {
                color: #FFF;
            }
        }
    }
`;
