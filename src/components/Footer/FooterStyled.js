import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${({ theme }) => theme.input};
    width: 100%;
    margin-top: 3rem;
    padding: 2rem;
    .data {
        display: flex;
        flex-direction: column;
        h2 {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.text};
        }
        p {
            color: #9DAEC2;
            font-size: 1rem;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        .data {
            display: none;
        }
        .apply-button {
            width: 100%;
        }
    }
`;