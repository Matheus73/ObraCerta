import styled, {css} from 'styled-components';

import Item from '../Item'

const otherButtons = {
    width: "auto",
    padding: "8px 12px 8px 12px" 
};

const Button = styled(Item).attrs({as:"button"})`
    min-width: 150px;
    text-align: center;
    
    border-radius: 20px;
    background: #F0CA45;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    margin: 0px 0px 14px 4px;

    ${props => props.primary && css`
        ${otherButtons};
        background: #14D0AE;
    `};

    ${props => props.second && css`
        ${otherButtons};
    `};
`;

export default Button;