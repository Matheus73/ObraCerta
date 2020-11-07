import {createGlobalStyle} from 'styled-components';
import trianguloBackground from '../assets/triangulobackground.svg';
export default createGlobalStyle`
*{
    margin:0;
    margin-top: 0;
    border: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body {
    background: #E5E5E5 url(${trianguloBackground}) no-repeat top;
    -webkit-font-smoothing: antialiased;
}
body, input, button {
    font: 16px Roboto, sans-serif;
}
#root {
    max-width: 970px;
    margin: 0 auto;
    padding: 40px 20px;
}
button {
    cursor: pointer;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
