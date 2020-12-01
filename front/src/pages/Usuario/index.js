import React, { Component } from 'react';
import Card from '../../components/Card';
import Space from '../../components/Space';
import ProfileCard from '../../components/ProfileCard';
import CardGroup from '../../components/CardGroup';
import createHistory from 'history/createBrowserHistory';
import AliceCarousel from 'react-alice-carousel';
import PageDefault from '../PageDefault';
import 'react-alice-carousel/lib/alice-carousel.css';

class PerfilUsuario extends Component {
    constructor(props){
        super(props);

        this.userData = '';
        this.posts = '';

        let history = createHistory();
        let data = history.location.state;
        // console.log(data)
        this.userData = data[0][0];
        this.posts = data[1];
        // console.log(this.userData)
        // console.log(this.posts)

        let imgs = []
        for(let i in this.posts){
            let nomeImagem = this.posts[i].url
            imgs.push(<img src={nomeImagem} width={960} height={500} alt="Publicação"/>)
        }

        this.posts = imgs;
    }

    render() {
        return (
            <>
            <PageDefault>
                <main>
                    <Space/>
                    <h2>{this.userData.nomeCompleto}</h2>
                    <ProfileCard
                        src={this.userData.imagemPerfil}
                        title="Descrição:"
                        description={this.userData.descricao || "Sem descrição"}
                    />
                    <Space size="10px"/>
                    <CardGroup>
                        <Card>
                            <p><strong>Categoria:</strong><br/>
                            {this.userData.categoria || "Não definido"}</p>
                        </Card>
                        <Card>
                            <p><strong>Telefone:</strong><br/>
                            {this.userData.telefone || "Não definido"}</p>
                        </Card>
                        <Card>
                            <p><strong>Região:</strong><br/>
                            {this.userData.localidade || "Não definido"}</p>
                        </Card>
                    </CardGroup>
                    {this.posts.length !== 0 && 
                    <div id="carrossel">
                        <h2>Publicações</h2>
                        <AliceCarousel mouseTracking items={this.posts}  infinite={true}/>
                    </div>
                    }
                </main>
                </PageDefault>
            </>
        )
    }
}

export default PerfilUsuario;
