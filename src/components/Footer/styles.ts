import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterInformationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
        a + a {
            margin-top: 1.2rem;
        }
        
        p + p {
            margin-top: 1.2rem;
        }
    }
`;

export const FooterContainer = styled.footer`
    padding: 5rem;
`;

export const SocialMediaContainer = styled.p`
    
`;

export const AddressContainer = styled.p`
    
`;

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    b {
        color: #ff213f;
        margin: auto 0.5rem;
    }

    margin-top: 5rem;
`;

export const AddressInformationContainer = styled.p`
    text-decoration: none;
    color: #444;
    text-align: center;

    display: flex;
    align-items: center;
    gap: 0.5rem;


    svg {
        color: #ff213f;
        font-size: 1.5rem;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #444;
    text-align: center;

    display: flex;
    align-items: center;
    gap: 0.5rem;


    svg {
        color: #ff213f;
        font-size: 1.5rem;
    }
`;