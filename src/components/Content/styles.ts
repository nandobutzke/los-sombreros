import styled from 'styled-components';

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    
    .text-content {
        justify-content: center;
        h2 {
            color: #ff213f;
        }
        
        hr {
            margin: 20px 200px 20px auto;
        }
        
        p {
            font-size: 24px;
            color: #444;
        }
    }
    
    .img-content {
        text-align: right;
    }
`;