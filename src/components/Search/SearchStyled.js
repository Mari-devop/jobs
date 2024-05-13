import styled from "styled-components";
import search from '../../assets/desktop/icon-search.svg'
import navi from '../../assets/desktop/icon-location.svg'

export const SearchComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -20px auto;
    background-color: #fff;
    width: fit-content;
    padding: 10px;
    height: 60px;
    border-radius: 5px;
    background: ${({ theme }) => theme.input};
        input {
            border: none;
            border-right: 1px solid #ccc;
            font-size: 16px;
            outline: none;
            padding: 10px;
            margin: 5px;   
        }
        .search {
            width: 350px;
            padding-left: 35px;
            background-image: url(${search});
            background-position: 3px 8px;
            background-repeat: no-repeat;
        }
        .search::placeholder {
            padding-left: 10px;
            font-size: 14px;
        }
        .navi {
            width: 200px;
            padding-left: 30px;
            background-image: url(${navi});
            background-position: 3px 8px;
            background-repeat: no-repeat;
        }
        .navi::placeholder {
            padding-left: 15px;
            font-size: 14px;
        }
        input[type="checkbox"] {
            margin: 5px;
            width: 20px;
            height: 20px;
            accent-color: #5964E0;
            
        }
        label {
            font-size: 14px;
            font-weight: 500;
            margin: 5px;
        }
    @media (max-width: 1000px) {
        .search {
            width: 250px;
        }
        .navi {
            width: 150px;
        }
    }
    @media (max-width: 700px) {
        .search {
            display: none;
        }
        .navi {
            width: 200px;
        }
        input[type="checkbox"]{
            display: none;
        }
        label {
            display: none;
        }
    }
`;