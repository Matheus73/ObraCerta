import React from 'react';
import Button from '../../components/Button';
// import Item from '../../components/Item';
import Input from '../../components/Input';
// import Footer from '../../components/Footer';
import GlobalStyle from './styles';

function Cadastro(){
return (
    <>
        <GlobalStyle/>
        <h1>CADASTRE-SE</h1>
        <form>
            <div>
                <br/>
                <label for="name">Nome:</label>
                <Input type="text" id="name" name="name" placeholder = "Digite seu nome" />
            </div>

            <div>
                    <br/>
                    <label for = "email">Email:</label>
                <Input type = "text" id = "email" name="email" placeholder = "Digite seu email" />
            </div>

            <div>
                    <br/>
                    <label for = "password">Senha:</label>
                <Input id = "password" type = "password" name="password" placeholder = "Digite sua senha" />
            </div>

            <div>
                    <br/>
                    <label for = "confirm_password">Confirmar senha:</label>
                <Input id= "confirm_password" type = "confirm_password" name="confirm_password" placeholder = "Confirme sua senha" />
            </div>

                    <br/>
            <input id = "user-terms" type = "checkbox" name = "terms"/>
            <label for="user-terms"> Li e aceito os termos de uso</label>

            <div>
                    <br/>
                <Button>Enviar</Button>
            </div>

        </form>

    </>
    );
}

export default Cadastro;
