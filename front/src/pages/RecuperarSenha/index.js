import React from 'react';
import PageDefault from '../PageDefault';
import Container from '../TermosDeUsuario/styles';


function RecoverAccount(props) {
    return (
        <PageDefault loggedIn={props.loggedIn}>
                <h2>RECUPERAR CONTA</h2>
            <Container>

                <p>Em caso de esquecimento de senha entre em contato conosco pelo e-mail obracerta@gmail.com</p>

                <p>Com o assunto: RECUPERAR SENHA</p>

                <p>No corpo do e-mail o seu e-mail cadastrado no nosso site.</p>

            </Container>
        </PageDefault>
    )
}

export default RecoverAccount;
