import styled from 'styled-components';

const Item = styled.a`
    color: ${props => props.white ? "#FFFFFF" : "#010101"};
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
`;

export default Item;