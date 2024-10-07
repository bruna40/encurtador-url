import styled from "styled-components";


export const ContainerMain = styled.main`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  

  padding: 1rem;

  min-height: 85vh;
  @media(min-width: 769px) {
    min-height: 75vh;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid ${({ theme }) => theme['--lt-color-gray-500']};
    border-radius: 0.25rem;
    box-sizing: border-box;
    font-size: 0.9rem;
    margin-top: 10rem;

    &:focus {
      border-color: ${({ theme }) => theme['--color-blue']};
    }
  }
  button {
    padding: 0.5rem;
    background-color: ${({ theme }) => theme['--color-blue']};
    color: ${({ theme }) => theme.white};
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 0.9rem;
  }


`

export const ShortenedUrlContainer = styled.span`

  margin-top: 20px;
  padding: 10px;
  color: #0c5460;
  border-radius: 5px;
  display: flex;
  align-items: center;

  a {
      margin-left: 10px;
      color: #0c5460;
      text-decoration: underline;
      &:hover {
          text-decoration: none;
          color: #0b3e5b;
      }
  }
`