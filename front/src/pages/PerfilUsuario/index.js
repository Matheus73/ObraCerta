import React, { Component } from 'react';
// import PageDefault from '../../pages/PageDefault';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Space from '../../components/Space';

class PerfilUsuario extends Component {

    render() {
        return (
            <>
                <main>
                    <h1>PerfilUsuario</h1>
                    <br/>
                    <h1>Olá {sessionStorage.getItem("name")}</h1>
                    <br/>
                    <Card horizontal width="100%">Email: {sessionStorage.getItem("email")}</Card>
                    <Space/>
                    <Card horizontal width="100%">Telefone: {sessionStorage.getItem("telefone")}</Card>
                </main>
                <Footer/>
            </>
        )
    }
}

export default PerfilUsuario;
