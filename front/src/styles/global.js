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
    }

    a, button {
        cursor: pointer;
        font-weight: bold;

    }
    a{
        /* color: #E5E5E5; */
        text-decoration: none;
        /* transition: color 0.2s; */
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    bottom {
        overflow-x: hidden;
    }
`;
