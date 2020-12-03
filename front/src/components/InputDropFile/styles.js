import styled, { css } from 'styled-components';

const Box = styled.div.attrs({
    className: "dropZone"
})`
    width: 100%;
    height: 100%;
    padding: 25px;
    background: #ECF0F1;
    border-radius: 25px;
    border: 5px;
    border-style: dotted;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    color: #817975;
    font-size: 22px;
    text-align: center;
    transition: height 0.2s ease;

    ${props => props.isDragAccept && css`
        color: green;
        font-weight: bold;
        border-color: green;
    `};
    
    ${props => props.isDragReject && css`
        color: red;
        font-weight: bold;
        border-color: red;
    `};

    input {
        padding: 25px;
    }
`;

export default Box;