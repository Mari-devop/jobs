import styled from "styled-components";

export const CardComponent = styled.div`
    position: relative; 
    background: #fff;
    height: 250px;
    width: 100%;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in;  
    background: ${({ theme }) => theme.input};
    .logo {
        position: absolute; 
        top: -2rem; 
        left: 10%; 
        font-size: 1rem;
        font-weight: 700;
        color: #333;
        border-radius: 10px;
        padding: 1rem 0.5rem;

        img {
            width: 45px;
            height: 20px;
        }
    }

    .details {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 1rem;
        color: #9DAEC2;
        font-size: 0.9rem;
    }

    .dot::after {
        content: '•';
        margin: 0 0.5rem;
    }   

    .main {
        margin-top: 1rem;
    }

    h3 {
        font-size: 1.3rem;
        color: #19202D;
        cursor: pointer;
        padding-bottom: 0.5rem;
        color: ${({ theme }) => theme.text};
    }

    h3:hover {
        color: #6E8098;
    }

    span {
        font-size: 0.9rem;
        color: #9DAEC2;
    }

    a {
        text-decoration: none;
    }

    h4 {
        font-size: 1rem;
        color: #939BF4;
        padding-top: 2rem;
    }
`;
