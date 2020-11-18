import React from 'react';

import Nav from './styles';

import Button from '../Button';
import Item from '../Item';

function Navbar(props){
    return (
        <Nav>
            <Item white mobileOff>Sobre</Item>
            <Item white href="/login">Entrar</Item>
            <Button second onclick="location.href='/cadastro' ">CADASTRA-SE</Button>
        </Nav>
    );
}

export default Navbar;
