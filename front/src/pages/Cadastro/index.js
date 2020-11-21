import React from 'react';
import Button from '../../components/Button';
import Item from '../../components/Item';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

function Cadastro(){
return (
<div>
<Button second>CADASTRE-SE</Button>
<Button primary>Teste</Button>
<Item white>Teste</Item>
<div>
    <br/>
    <p>Nome:</p>
</div>
<Input type = "text" name="teste" placeholder = "Digite seu nome" />
<div>
    <br/>
    <p>Senha:</p>
<Input type = "password" name="testesenha" placeholder = "Digite sua senha" />
</div>
<Footer background = "#546588"></Footer>
</div>
    );
}

export default Cadastro;
