import styled from 'styled-components';

const Item = styled.a`
    color: ${props => props.white ? "#FFFFFF" : "#010101"};
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
`;

export default Item;