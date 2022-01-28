import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin: 2.5rem 200px;
`;

export const TitleProductsdGridContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 1.5rem;

    h2 {
        color: #ff213f;
        font: 2.75rem "Fredoka One", sans-serif;
    }

    hr {
        margin: auto;
        width: 250px;
    }
`;