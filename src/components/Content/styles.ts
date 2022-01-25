import styled from 'styled-components';


export const MainContainer = styled.main`
    display: block;
    justify-content: center;
    
    
    .text-content {
        justify-content: center;
        align-items: center;
        text-align: center;
        opacity: 1 !important;
        width: 100%;
        padding: 3rem;

        h2 {
            color: #ff213f;
            font-size: 5rem;
            font-family: "Fredoka One", sans-serif
        }
        
        hr {
            margin: 20px 600px 20px 600px;
        }
        
        p {
            font-size: 24px;
            color: #222;
        }
    }

    img {
        width: 100%;
        height: 600px;
        object-fit: cover;

        -webkit-mask-image:-webkit-gradient(linear, bottom, top, from(rgba(0,0,0,2)), to(rgba(0,0,0,0)));
        mask-image: linear-gradient(to top, rgba(0,0,0,2), rgba(0,0,0,0));
    }

    
`;