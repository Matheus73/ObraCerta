import React from 'react';

import Nav from './styles';
import Button from '../Button';
import Item from '../Item';

function Navbar(props){
    return (
        <Nav>
            <Item white href="/termosdeuso">Sobre</Item>
            {props.loggedIn === "NOT_LOGGED_IN" ? 
                <>
                    <Item white href="/login">Entrar</Item>
                    <Button second href="/cadastro">CADASTRA-SE</Button>
                </>
                :
                <Button second href="#">Meu perfil</Button>
            }
        </Nav>
    );
}

export default Navbar;