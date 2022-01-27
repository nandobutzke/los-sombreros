import styled from 'styled-components';


export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text-content {
        display: inline-block;
        justify-content: left;
        align-items: left;
        text-align: left;
        width: 50%;
        opacity: 1 !important;
        height: 50vh;
        padding: 3rem;

        h2 {
            color: #ff213f;
            font-size: 5rem;
            font-family: "Fredoka One", sans-serif
        }
        
        hr {
            margin: 1.75rem auto;
        }
        
        p {
            font-size: 24px;
            color: #222;
        }

        button {
            margin-top: 1.5rem;
        }
    }

    .img-content {
        padding: 3rem;
        width: 50%;
        display: flex;
        justify-content: center;


    }
`;

export const MainContainer = styled.main`
    display: block;
    justify-content: center;

    .banner {
        width: 100%;
        height: 600px;
        object-fit: cover;

        -webkit-mask-image:-webkit-gradient(linear, bottom, top, from(rgba(0,0,0,2)), to(rgba(0,0,0,0)));
        mask-image: linear-gradient(to top, rgba(0,0,0,2), rgba(0,0,0,0));
    }
`;