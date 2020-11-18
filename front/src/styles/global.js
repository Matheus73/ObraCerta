import {createGlobalStyle} from 'styled-components';
import trianguloBackground2 from '../assets/triangulobackground2.svg';

export default createGlobalStyle`
    *{
        margin:0;
        border: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    #root {
        margin: 0 auto;
        padding: 0px 15px;
    }
    #content{
        min-height: 100vh;
        margin: auto;
        max-width: 970px;
    }
    body {
        height: 100%;
        overflow-x: hidden;
        background:#FFFFFF url(${trianguloBackground2}) no-repeat center;
        background-size: cover;
        -webkit-font-smoothing: antialiased;
    }
    body, a, button, input {
        font: 22px Roboto, sans-serif;
        
        @media screen and (max-width: 370px){
            font-size: 16px;
        }
    }

    a, button {
        cursor: pointer;
        font-weight: bold;
    }

    a{
        text-decoration: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    h1{
        text-align: center;
        font-size: 72px;

        @media screen and (max-width: 650px){
            font-size: 30px;
        }
    }
    p{
        text-align: center;
    }
`;
