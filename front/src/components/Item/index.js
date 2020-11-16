import styled, { css } from 'styled-components';

const Item = styled.a`
    color: ${props => props.white ? "#FFFFFF" : "#010101"};
    
    &:hover{
        transition: color 0.2s;
        color: ${props => props.white && css`#010101`};
    }
`;

export default Item;