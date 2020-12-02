import {createGlobalStyle} from 'styled-components';
import trianguloBackground from '../assets/triangulobackground.svg';

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
    #carrossel{
        background-color:#ECF0F1;
        border-radius: 25px;
        margin:15px 0px;
        max-height: 500px;
        box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
        padding:10px;

        h2{
            text-align: center;
            padding-bottom: 10px;
        }
    }
    main {
        min-height: calc(100vh - 150px); //Altura total - Footer
        margin: auto;
        max-width: 970px;
    }
    body {
        height: 100%;
        overflow-x: hidden;
        background:#FFFFFF url(${trianguloBackground}) no-repeat center;
        background-size: cover;
        -webkit-font-smoothing: antialiased;
    }
    body, a, button, input, textarea {
        font: 22px Roboto, sans-serif;
    }

    a, button {
        cursor: pointer;
        font-weight: bold;
    }

    label {
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    form {
        margin: auto;
        width: 500px;
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
