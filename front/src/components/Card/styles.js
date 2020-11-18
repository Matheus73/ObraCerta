import styled, { css } from 'styled-components';

const Box = styled.div`
    display: flex;
    margin: 20px 15px;
    text-align: center;
    
    ${props => (props.vertical || !props.horizontal) && css`
        max-width: ${props => props.width || "30%"};
        min-height: ${props => props.height || "320px"};
    
        flex-direction: column;
        align-items: center;
        flex-flow: column nowrap;
        justify-content: space-around;
    
        img {
            width: 70%;
            margin: 20px 0px;
        }
    `}

    ${props => props.horizontal && css`
        max-width: ${props => props.width || "100%"};
        min-height: ${props => props.height || "320px"};

        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        img {
            
        }
    `}

    padding: 25px 50px;
    background: #ECF0F1;
    border-radius: 25px;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
`;

export default Box;