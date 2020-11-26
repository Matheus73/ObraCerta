import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-flow: column nowrap;
    justify-content: space-around;

    width: ${props => props.width || "255px"};
    margin: 10px 15px;
    text-align: center;

    padding: 25px 50px;
    background: #ECF0F1;
    border-radius: 25px;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
      
    img {
        width: 70%;
        margin: 20px 0px;
    }

    @media screen and (max-width: 900px) {
        width: 450px;
        flex-direction: row;
        flex-wrap: row nowrap;
        
        img {
            width: 100px;
            margin: 20px 20px;
        }
    }

    @media screen and (max-width: 520px) {
        flex-direction: column;
    }

`;

export default Box;