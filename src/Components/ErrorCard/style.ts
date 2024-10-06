import styled from 'styled-components';

export const Card = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: fade-in 0.3s ease-in-out;

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ErrorContent = styled.div`
    h3 {
        margin: 0 0 10px;
    }

    button {
        background-color: #721c24;
        color: #fff;
        border: none;
        border-radius: 3px;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
            background-color: #9a2a2f;
        }
    }
`;
