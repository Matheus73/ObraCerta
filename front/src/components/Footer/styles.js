import styled from 'styled-components';
import {shade} from 'polished';
export const Container = styled.footer`
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: 100px;
    botton: 0px;
    left: 0px;
    margin-top: 100px;
    background: #14D0AE;
    border-radius: 60px 60px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;


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

