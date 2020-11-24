import React from 'react';

import Nav from './styles';
import Button from '../Button';
import Item from '../Item';

function Navbar(props){
    return (
        <Nav>
            <Item white href="/sobre">Sobre</Item>
            {props.loggedIn === "NOT_LOGGED_IN" ?
                <>
                    <Item white href="/login">Entrar</Item>
                    <Button second href="/cadastro">CADASTRA-SE</Button>
                </>
                :
                    <Button second href="/PerfilUsuario">Meu perfil</Button>
            }

        </Nav>
    );
}

export default Navbar;
