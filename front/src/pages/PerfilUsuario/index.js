import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Space from '../../components/Space';
import ProfileCard from '../../components/ProfileCard';
import CardGroup from '../../components/CardGroup';
import imgProfileDefault from '../../assets/profileDefault.png';
import axios from 'axios';

class PerfilUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: {},
            userData: {
                nomeCompleto: localStorage.getItem('nomeCompleto'),
                telefone: localStorage.getItem('telefone'),
                email: localStorage.getItem('email'),
                idUsuario: localStorage.getItem('idUsuario'),
                descricao: localStorage.getItem('descricao'),
                localidade: localStorage.getItem('localidade'),
                descricao: localStorage.getItem('descricao'),
                imagemPerfil: localStorage.getItem('imagemPerfil'),
                categoria: localStorage.getItem('categoria')
            }
        }
    }

    componentDidMount = () => {
        const url = 'http://localhost:3001/' + localStorage.getItem('idUsuario') + '/publicacoes'
        console.log(url)
        axios.get(url,{
            headers:{
                'authorization': localStorage.getItem('token')
            }
        })
            .then(response => {

                let imagem = {};                
                for( var i in response.data){
                    let idPublicacao = response.data[i].idPublicacao;
                    let nomeImagem = response.data[i].nomeImagem;
                    imagem[i] = {idPublicacao,nomeImagem};
                }
                this.setState({
                    posts: imagem,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

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
                            {localStorage.getItem("localidade") || "Não definido"}</p>
                        </Card>
                    </CardGroup>
                </main>
                <Footer/>
            </>
        )
    }
}

export default PerfilUsuario;
