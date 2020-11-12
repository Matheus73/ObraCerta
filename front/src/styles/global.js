import {createGlobalStyle} from 'styled-components';
// import trianguloBackground from '../assets/triangulobackground.svg';
import trianguloBackground2 from '../assets/triangulobackground2.svg';
import Background from '../components/Background';
export default createGlobalStyle`
    *{
        margin:0;
        border: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    #root {
        max-width: 970px;
        margin: 0 auto;
        padding: 0px 15px;
    }
    body {
        overflow-x: hidden;
        background: #E5E5E5 url(${trianguloBackground2}) no-repeat top;
        background-size: 100%;
        -webkit-font-smoothing: antialiased;
    }
    body, a, button, input {
        font: 22px Roboto, sans-serif;
    }
    a, button {
        cursor: pointer;
        font-weight: bold;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    bottom {
        overflow-x: hidden;
    }

    h1{
        text-align: center;
        font-size: 72px;
        

    }
`;
