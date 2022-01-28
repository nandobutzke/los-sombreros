import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCartItemLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: #444;
    margin-left: 5rem;

    div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 0.75rem;
        }
    }

    gap: 0.5rem;
    
`;