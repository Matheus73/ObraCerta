import styled from 'styled-components';

const Space = styled.div`
    margin-top: ${props => props.size || "25px"};
    @media screen and (max-width: 900px){
        margin-top: ${props => props.sizeMobile || props.size};
    }
`;

export default Space;