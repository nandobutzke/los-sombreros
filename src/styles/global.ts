import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    :root {
        --color-background: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        body {
            font: 16px "Poppins", sans-serif;
            background: var(--color-background);
            height: 100vh;
        }
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`

