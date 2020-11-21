import styled from 'styled-components';

const Item = styled.a`
    color: ${props => props.white ? "#FFFFFF" : "#010101"};
`;

export default Item;