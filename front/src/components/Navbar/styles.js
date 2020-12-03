import styled from 'styled-components';
import Item from '../Item';

const Nav = styled.nav`
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    flex-flow: row nowrap;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;

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
