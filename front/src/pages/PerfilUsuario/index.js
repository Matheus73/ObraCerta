import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Space from '../../components/Space';
import ProfileCard from '../../components/ProfileCard';
import CardGroup from '../../components/CardGroup';
import imgProfileDefault from '../../assets/profileDefault.png';

class PerfilUsuario extends Component {

    render() {
        return (
            <>
                <main>
                    <Space/>
                    <h2>{localStorage.getItem("name")}</h2>
                    <ProfileCard
                        src={imgProfileDefault}
                        title="Descrição:"
                        description={localStorage.getItem("descricao") || "Sem descrição"}
                    />
                    <Space size="10px"/>
                    <CardGroup>
                        <Card>
                            <p><strong>Categoria:</strong><br/>
                            {localStorage.getItem("categoria") || "Não definido"}</p>
                        </Card>
                        <Card>
                            <p><strong>Telefone:</strong><br/>
                            {localStorage.getItem("telefone") || "Não definido"}</p>
                        </Card>
                        <Card>
                            <p><strong>Região:</strong><br/>
                            {localStorage.getItem("regiao") || "Não definido"}</p>
                        </Card>
                    </CardGroup>
                </main>
                <Footer/>
            </>
        )
    }
}

export default PerfilUsuario;
