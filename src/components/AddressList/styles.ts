import styled from "styled-components";

export const AddressListContainer = styled.div`
    display: inline-block;
    padding: 10%;

    button {
        margin-bottom: 3.75rem;
    }

    ul {
        list-style: none;

        li {
            padding: 15px;
            border: 1px solid var(--color-default-green);
            border-radius: 4px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2.75rem;

            & + li {
                margin-top: 1.5rem;
            }

            div {
                display: flex;
                flex-direction: column;

                strong {
                    font-size: 1.05rem;
                }

                span {
                    font-size: 0.8rem;
                }
            }

            svg {
                color: var(--color-default-green);
            }

        }

        
    }
`;