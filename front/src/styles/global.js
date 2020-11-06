import { createGlobalStyle } from 'styled-components';
import trianguloBackground from '../assets/triangulobackground.svg';

export default createGlobalStyle`
body {
    /*content*/
    max-width: 970px;
    margin: auto;

    font: 18px Roboto, sans-serif;
    background: #E5E5E5 url(${trianguloBackground}) no-repeat top;
    -webkit-font-smoothing: antialiased;
}
`;
