import React from 'react';
import PageDefault from '../PageDefault';
import Container from '../TermosDeUsuario/styles';


function RecoverAccount(props) {
    return (
        <PageDefault loggedIn={props.loggedIn}>
            <Container>
                <h2>RECUPERAR CONTA</h2>

                <p>Em caso de esquecimento de senha entre em contato conosco pelo e-mail <b>obracerta@gmail.com</b></p>

                <p>Com o assunto: <b>RECUPERAR SENHA</b></p>

                <p>No corpo do e-mail o <b>seu e-mail cadastrado</b> no nosso site.</p>

            </Container>
        </PageDefault>
    )
}

export default RecoverAccount;
