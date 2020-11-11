import styled from 'styled-components';
import {shade} from 'polished';
export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0px;
    bottom: 0%;
    background: #14D0AE;
    border-radius: 60px 60px 0px 0px;
    /* align-items: center;//totalmente inutil */

a {
    display: inline-block;

    margin: 25px 25px 0 25px;
    color: #E5E5E5;
    text-decoration: none;
    transition: color 0.2s;
    &:hover{
        color: ${shade(0.2, '#888989')}
    }
}
`;

export default Container;

