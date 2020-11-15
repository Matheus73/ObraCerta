import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import GlobalStyle from './styles';
import Item from '../../components/Item';

function Login(){
return (
    <>
        <GlobalStyle/>
        <div id="content">
            <h1>Login</h1>
            <p>Logue para encontrar os melhores profissionais para sua obra ou para divulgar o seu trabalho!</p>
            <form>

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
                    <Item>Esqueci minha senha</Item>
                    
                    
                </div>

                <div>
                        <br/>
                    <Button>Enviar</Button>
                </div>

            </form>
        </div>
        <Footer color="#F0CA45"/>

    </>
    );
}

export default Login;
