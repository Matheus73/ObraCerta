import styled from 'styled-components';

export const Info = styled.p`
    width: 300px;
    color: white;
    margin-top: 10px;
    padding: 5px 5px;
    border-radius: 10px;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    background-color: #0075ff;
`;

export const Background = styled.div`
    width: 280px;
    height: 210px;
    border-radius: 25px;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
    background-color: grey;
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    
    canvas {
        border-radius: 25px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: 0px 5px;
    }

    span {
       padding: 5px;
       margin-top: 15px;
    }

    input[type='file'] {
        display: none;
    }

    input[type='range'] {
        width: 260px;
    }

    @media screen and (max-width: 740px) {

        word-wrap: break-word;
        margin: 25px auto;

        input[type='range'] {
            width: 80%;
        }

        div {
            margin: auto;
        }
    
    }
`;

export default Box;
