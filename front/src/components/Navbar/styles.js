import styled, {css} from 'styled-components';
import Item from '../Item';

const Nav = styled.nav`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-flow: row nowrap;
    align-items: baseline;
    justify-content: flex-end;

    ${Item}{
        margin: 0px 0px 20px 20px;
    }

    @media (max-width: 800px){
        justify-content: center;
        ${Item}{
            font-size: 0.9em;
        }
    }
`;

export default Nav;