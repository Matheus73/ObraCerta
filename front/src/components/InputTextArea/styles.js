import styled, { css } from 'styled-components';

const Box = styled.div`
    padding: 25px;
    background: #ECF0F1;
    border-radius: 25px;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    
    textarea {
        ${props => !props.resize && css`resize: none;`};
        width: 100%;
        border-radius: 25px;
        padding: 25px;
    }
`;

export default Box;