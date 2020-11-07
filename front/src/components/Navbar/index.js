import React from 'react';

import Nav from './styles';

import Button from '../Button';
import Item from '../Item';

function Navbar(props){
    return (
        <Nav>
            <Item white mobileOff>Sobre</Item>
            <Item white>Entrar</Item>
            <Button second>CADASTRA-SE</Button>
        </Nav>
    );
}

export default Navbar;