import styled from "styled-components";

export const CardPageContainer = styled.div`
    display: flex;
    background: ${({ theme }) => theme.input};
    width: 100%;
    position: relative;
    top: -1rem;
    max-width: 700px;
        .card-logo {
            width: 30%;
            max-width: 100px;
            display: flex;
            justify-content: flex-end;
            .logo {
                width: 100px;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                }
            }
        }
        .job-details { 
            width: 77%;
            display: flex;
            margin-left: 1rem;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            .job-details-data {
                h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: ${({ theme }) => theme.text};
                }
                p {
                    font-size: 0.8rem;
                    font-weight: 400;
                    margin-bottom: 0.5rem;
                    color: #979797;
                }
            }
            
        }
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card-logo {
            position: relative;
            top: -1rem;
        }
        .job-details {
            margin-left: 0;
            margin-top: 1rem;
            width: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .job-details-data {
                h2 {
                    font-size: 1.2rem;
                    text-align: center;
                }
                p {
                    font-size: 0.8rem;
                }
            }
            .apply-button {
                margin-top: 1rem;
            }
        }
    }        
        
`;

export const CardTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.input};
    width: 100%;
    max-width: 700px;
    padding: 2rem;
        .card-title {
            width: 70%;
            display: flex;
            flex-direction: column;
            .company{
                color: #5964E0;
                font-size: 0.9rem;
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
                padding-top: 0.5rem;
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
        
            h4 {
                font-size: 1rem;
                color: #939BF4;
                padding-top: 2rem;
            }
        }
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card-title {
            width: 100%; 
        }
        .apply-button {
            margin-top: 1rem;
            width: 100%;
        }
    }   
`;

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.input};
    width: 100%;
    max-width: 700px;
    padding: 2rem;
        p {
            font-size: 1rem;
            padding: 1rem 2rem;
            line-height: 1.5;
            color: #6E8098;
        }
        h4 {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.text};
            padding-top: 2rem;
            justify-content: flex-start;
            padding-left: 2rem;
        }
        ul {
            padding-left: 4rem;
            padding-top: 1rem;
            max-width: 600px;
            li {
                font-size: 1rem;
                color: #6E8098;
                line-height: 2;
            }
        }
`;