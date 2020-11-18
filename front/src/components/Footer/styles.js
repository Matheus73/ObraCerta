import styled, { css } from 'styled-components';
import Item from '../Item';

const Container = styled.footer`
    position: relative;
    width: 100%;
    bottom: 0px;
    left: 0px;
    min-height: 100px;
    margin-top: 50px;
    padding-bottom: 20px;
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;

    background: #14d0ae;
    border-radius: 60px 60px 0px 0px;

    ${Item} {
        margin: 25px 25px 0 25px;
    }

    ${props => props.orange && css`
        background: #F0CA45;
    `};
`;

export default Container;