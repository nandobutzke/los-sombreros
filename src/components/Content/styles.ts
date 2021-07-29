import styled from 'styled-components';
import paletasImg from '../../assets/img/paletas-background.jpg';

export const MainContainer = styled.main`
    display: grid;
    margin: auto;
    background: url(${paletasImg});
    padding: 5rem;
    
    /*img {
        width: 100%;
    }*/
    
    .text-content {
        justify-content: center;
        opacity: 1 !important;
        margin: 2.5rem 200px;

        h2 {
            color: #ff213f;
            font-size: 5rem;
        }
        
        hr {
            margin: 20px 200px 20px auto;
        }
        
        p {
            font-size: 24px;
            color: #444;
        }

    }
`;