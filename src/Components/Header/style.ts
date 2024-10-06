import styled from "styled-components";

export const ContainerHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 3;
    transition: box-shadow 0.5s ease;
    background-color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;


    box-shadow: 0 2px 10px ${({ theme }) => theme['--lt-color-gray-500']};

    img {
        max-height: 3rem;
        width: auto;
    }


    @media (min-width: 769px) {
        box-shadow: none;
    }

    @media (max-width: 768px) {
        padding: 0.5rem;

        img {
            max-height: 2rem;
        }
    }
`;
