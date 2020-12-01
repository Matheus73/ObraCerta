import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Space from '../../components/Space';
import ProfileCard from '../../components/ProfileCard';
import CardGroup from '../../components/CardGroup';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class PerfilUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: {},
            //! Imagens de teste
            imgs: [],

            }

            const url = localStorage.getItem('idUsuario') + '/publicacoes'
            api.get(url,{
                headers:{
                    Authorization: localStorage.getItem('token')
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
                    this.setState({
                        imgs: imgs
                    })

                    //? console.log(this.state.imgs)
                })
                .catch(error => {
                    console.log(error);
                })
    }

    componentDidMount = () => {
        const url = localStorage.getItem('idUsuario') + '/publicacoes'
        api.get(url,{
            headers:{
                Authorization: localStorage.getItem('token')
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
                this.setState({
                    imgs: imgs
                })

                //? console.log(this.state.imgs)
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <>
            <Navbar type="secundary"/>
                <main>
                    <Space/>
                    <h2>{localStorage.getItem("name")}</h2>
                    <ProfileCard
                        src={localStorage.getItem('imagemPerfil')}
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
                            {localStorage.getItem("localidade") == null|| "Não definido"}</p>
                        </Card>
                    </CardGroup>
                    { this.state.imgs.length !== 0 && 
                        <div id="carrossel">
                            <h2>Publicações</h2>
                            <AliceCarousel mouseTracking items={this.state.imgs}  infinite={true}/>
                        </div>
                    }
                </main>
                <Footer/>
            </>
        )
    }
}

export default PerfilUsuario;
