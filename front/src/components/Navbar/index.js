import React from 'react';
import { GrTools } from 'react-icons/gr';
import Nav from './styles';
import Button from '../Button';
import Item from '../Item';

function Navbar(props){
    return (
        <>
            <Nav>
                <Item href="/"><GrTools size={30}/>Obra Certa</Item>
                <span>
                    <Item white href="/sobre">Sobre</Item>
                    {props.loggedIn === "NOT_LOGGED_IN" ?
                        <>
                            <Item white href="/login">Entrar</Item>
                            <Button second href="/cadastro">CADASTRA-SE</Button>
                        </>
                        :
                            <Button second href="/PerfilUsuario">Meu perfil</Button>
                    }
                </span>

            </Nav>
        </>
    );
}

export default Navbar;
