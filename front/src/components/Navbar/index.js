import React from 'react';
import { GrTools } from 'react-icons/gr';
import Nav from './styles';
import Button from '../Button';
import Item from '../Item';


function Navbar(props){

    function type(type) {

        if(type === 'secundary'){
            return(
                <>
                <div>
                    <Button second href="/editarperfil">Editar Perfil</Button>
                    <Button second href="/" onClick={() => localStorage.clear()}
                    > Sair</Button>
                    <Button second href="/Delete">Deletar Usuário</Button>
                </div>
                </>

            )
        }if(type === 'third'){
            return(<></>)
        } else {
            return (
                <span>
                    <Item white href="/sobre">Sobre</Item>
                    {localStorage.getItem('loggedIn') !== "LOGGED_IN" ?
                            <>
                            <Item white href="/login">Entrar</Item>
                            <Button second href="/cadastro">CADASTRA-SE</Button>
                            </>
                            :
                            <Button second href="/PerfilUsuario">Meu perfil</Button>
                    }
                        </span>
            )
        }
    }

    return (
        <>
        <Nav>
            <Item href="/"><GrTools size={30}/>Obra Certa</Item>
            {type(props.type)}
        </Nav>
        </>
    );
}

export default Navbar;
