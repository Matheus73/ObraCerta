import styled from 'styled-components';

export const Box = styled.div``;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    img {
        border-radius: 25px;
        filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
        transform: rotate(${props => props.rotation || "0deg"});
    }

    ${Box} div {
        text-align: center;
        max-width: 400px;
        padding: 42px 20px;
        margin: 15px 10px;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 25px;
    }

    @media screen and (max-width: 900px) {
        img {
            max-width: 90%;
        }

        ${Box} div {
            max-width: 100%;
            border: 0px;
            background: #F0CA45;
            box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
        }
    }
`;

export default Container;