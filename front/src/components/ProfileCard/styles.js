import styled from 'styled-components';
import Button from '../Button';

const Box = styled.div`
    display: flex;
    flex-direction: row;
    background: #ECF0F1;
    border-radius: 25px;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);

    img {
        width: 250px;
        height: 187px;
        border-radius: 25px 0px 0px 25px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: space-between;
        width: 100%;
        padding-right: 30px;
        margin-top: 10px;
        margin-left: 25px;
        word-wrap: break-word;
    }

    p, strong {
        text-align: left;
    }

    ${Button} {
        margin-right: 25px;
        align-self: flex-end;
    }

    @media screen and (max-width: 720px) {
        flex-direction: column;

        img {
            width: 50%;
            height: auto;
            margin: 5px auto;
            border-radius: 15px;
        }   

        ${Button} {
            margin-top: 25px;
            align-self: center;
        }
    }
`;

export default Box;