import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Item from '../../components/Item';
import Space from '../../components/Space';

function Login(){
return (
    <>
        <div id="content">
        <h1>Login</h1>
        <p>Logue para encontrar os melhores profissionais para sua obra ou para divulgar o seu trabalho!</p>
        <form>                
            <br/>
            <label>Email:
                <Input type = "text" id = "email" name="email" placeholder = "Digite seu email" />             
            </label>
            
            <br/>
            <label>Senha:
                <Input type = "password" name="password" placeholder = "Digite sua senha" />
            </label> 
            <br/>
            <Item href="#">Esqueci minha senha</Item>                              
            <Space/>
            <Button>Enviar</Button>
        </form>
        </div>
        <Footer orange/>
    </>
    );
}

export default Login;
