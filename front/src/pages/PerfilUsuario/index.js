import React, { Component } from 'react';
// import PageDefault from '../../pages/PageDefault';
import Footer from '../../components/Footer';

class PerfilUsuario extends Component {

    render() {
        return (
            <>
                <main>
                    <h1>PerfilUsuario</h1>
                    <br/>
                    <h1>Olá {sessionStorage.getItem("name")}</h1>
                    <br/>
                    <h2>Email: {sessionStorage.getItem("email")}</h2>
                    <h2>Telefone: {sessionStorage.getItem("telefone")}</h2>
                </main>
                <Footer/>
            </>
        )
    }
}

export default PerfilUsuario;
