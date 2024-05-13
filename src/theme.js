import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .html {
        font-size: 62.5%;
    }

    body {
        font-family: "Kumbh Sans", sans-serif;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
    }

    input {
        background: ${({ theme }) => theme.input};
    }

    .container {
        max-width: 1200px;
        width: 90%;
        margin: auto;
        .load-btn {
            display: block;
            margin: 5rem auto;
        }
    }

    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 4rem;
        margin-top: 5rem;
        margin-bottom: 2rem;
    }

    .card-page {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
    }

    button {
        background-color: #5964E0;
        border: none;
        color: #fff;
        font-size: 14px;
        padding: 10px 20px;
        margin-left: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #939BF4;
    }
`;
export const lightTheme = {
  body: '#F4F6F8',
  text: '#121620',
  input: '#fff'
};
export const darkTheme = {
  body: '#121721',
  text: '#fff',
  input: '#40454F'
};