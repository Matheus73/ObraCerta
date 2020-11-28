import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Space from '../../components/Space';
import ProfileCard from '../../components/ProfileCard';
import CardGroup from '../../components/CardGroup';
import imgProfileDefault from '../../assets/profileDefault.png';
import axios from 'axios';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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
                imagemPerfil: localStorage.getItem('imagemPerfil'),
                categoria: localStorage.getItem('categoria')
            },
            //! Imagens de teste
            //imgs: [] maneira oficial
            imgs: [<img src="https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2018/09/assessoria-de-obras.jpg" width={1000} height={500} alt="Publicação"/>,
            <img src="https://respostas.sebrae.com.br/wp-content/uploads/2019/09/386a2dfe736952d86d6f4f07387bc1d8.jpg"width={1000} height={500} alt="Publicação"/>,
            <img src="https://www.institutodaconstrucao.com.br/blog/wp-content/uploads/2017/01/IMG-20151017-WA0016-2-810x425.jpg" width={1000} height={500} alt="Publicação"/>]

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
                
                let imgs = []
                for(i in response.data){
                    let nomeImagem = response.data[i].nomeImagem;
                    imgs.push(<img src={nomeImagem} width={1000} height={500} alt="Publicação"/>)
                }
                //! Para teste manter comentada
                // this.setState({
                //     imgs: imgs
                // })

                //? console.log(this.state.imgs)
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
                    <div id="carrossel">
                        <h1>Publicações</h1>
                        <AliceCarousel mouseTracking items={this.state.imgs}  infinite={true}/>
                    </div>
                </main>
                <Footer/>
            </>
        )
    }
}

export default PerfilUsuario;
