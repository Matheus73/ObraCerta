import React from 'react';

import Nav from './styles';

import Button from '../Button';
import Item from '../Item';

function Navbar(props){
    return (
        <Nav>
            <Item white href="#" mobileOff>Sobre</Item>
            <Item white href="/login">Entrar</Item>
            {props.logged === "NOT_LOGGED" ? 
                <form action="/cadastro">
                    <Button second type="submit">CADASTRA-SE</Button>
                </form>
                :
                <form action="/PerfilUsuario">
                    <Button second type="submit">Meu perfil</Button>
                </form>
            }
            
        </Nav>
    );
}

export default Navbar;
