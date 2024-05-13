import styled from "styled-components";
import background from '../../assets/desktop/bg-pattern-header.svg'


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-image: url(${background});
    background-size: cover;
    width: 100%;
    height: 80px;
    font-family: 'Kumbh Sans', sans-serif;
    transition: color 0.3s ease, background 0.3s ease;
    border-bottom-left-radius: 30px;

.widgets {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    background-image: url(${background});
  }

  input:checked + .slider {
    background-color: #fff;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #ccc;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  .slider.round {
    border-radius: 34px;
    background-color: #fff;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
`;