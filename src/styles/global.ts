import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    :root {
        --color-background: #fff;
        --color-default: #ff213f;
        --color-default-green: #31ce47;
        --color-payment-default: #57C478;
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
    
    .react-modal-styles {
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;

        height: 50vh;
        margin: 200px 500px 200px 500px;
        padding: 100px;

        border: 1px solid var(--color-default);
        border-radius: 5px;

        div {
            width: 100%;

            input {
                width: 100%;
                padding: 10px;
                border: 1px solid var(--color-default);
                border-radius: 3px;

                & + input {
                    margin-top: 15px;
                }
            }

            button {
                width: 100%;
                padding: 10px;
                margin-top: 30px;
                
            }
        }
    }

    .overlay-modal-class {

    }

    ::-webkit-scrollbar {
        display: none;
    }
`

