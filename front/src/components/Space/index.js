import styled from 'styled-components';

const Space = styled.div`
    visibility: hidden;
    margin-top: ${props => props.size || "25px"};
    @media screen and (max-width: 900px){
        margin-top: ${props => props.sizeMobile || props.size};
    }
`;

export default Space;