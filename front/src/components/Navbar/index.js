import React from 'react';

import Nav from './styles';

import Button from '../Button';
import Item from '../Item';

function Navbar(props){
    return (
        <Nav>
            <Item white href="#">Sobre</Item>
            {props.loggedIn === "NOT_LOGGED_IN" ? 
                <>
                    <Item white href="/login">Entrar</Item>
                    <form action="/cadastro">
                        <Button second type="submit">CADASTRA-SE</Button>
                    </form>
                </>
                :
                <form action="#">
                    <Button second type="submit">Meu perfil</Button>
                </form>
            }
        </Nav>
    );
}

export default Navbar;
