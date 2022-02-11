import { darken, lighten } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    border: 2px solid #ff213f;
    border-radius: 0.25rem;
    padding: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5% 20%;

    footer {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        button {
            background-color: #ff213f;
            color: #fff;
            padding: 12px 20px;
            border: 0;
            border-radius: 4px;
            font-size: 20px;
            font-weight: bold;
        }
    }


    
    
`;

export const StyledTable = styled.table`
    thead th {
        padding: 12px;
        text-align: left;
    }

    tbody td:first-child {
        text-align: center
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 1.1rem;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        
        svg {
            color: #ff213f;
        }

        &:hover {
            svg {
                color: ${darken(0.06, '#ff213f')};
            }
        }

        &:disabled {
            svg {
                color: ${lighten(0.2, '#ff213f')};
                cursor: not-allowed;
            }
        }
    }
`;

export const StyledFinalizingPurchaseLink = styled(Link)` text-decoration: none; `;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;