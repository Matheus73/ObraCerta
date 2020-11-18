import React from 'react';

import Nav from './styles';

import Button from '../Button';
import Item from '../Item';

function Navbar(){
    return (
        <Nav>
            <Item white href="#" mobileOff>Sobre</Item>
            <Item white href="/login">Entrar</Item>
            <form action="/cadastro">
                <Button second type="submit">CADASTRA-SE</Button>
            </form>
        </Nav>
    );
}

export default Navbar;
