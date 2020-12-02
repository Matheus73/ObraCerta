import React, { Component } from 'react';
import Button from '../../components/Button';
import {SiWhatsapp} from 'react-icons/si';
import Card from '../../components/Card';
import Space from '../../components/Space';
import ProfileCard from '../../components/ProfileCard';
import CardGroup from '../../components/CardGroup';
import createHistory from 'history/createBrowserHistory';
import AliceCarousel from 'react-alice-carousel';
import PageDefault from '../PageDefault';
import InputTextArea from '../../components/InputTextArea';
import 'react-alice-carousel/lib/alice-carousel.css';
import api from '../../services/api';

class PerfilUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            addComent : '',
            // comments: []
        }
        this.userData = '';
        this.posts = '';
        this.comments =[];

        let history = createHistory();
        let data = history.location.state;
        // console.log(data)
        this.userData = data[0][0];
        this.posts = data[1];
        console.log(this.userData)
        // console.log(this.posts)

        let imgs = []
        for(let i in this.posts){
            let nomeImagem = this.posts[i].url
            imgs.push(<img src={nomeImagem} width={960} height={500} alt="Publicação"/>)
        }
        this.posts = imgs;

        let aux = [];
        for(let j in this.userData.comments){
            let com = this.userData.comments[j].conteudo
            aux.push(<ProfileCard src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F247-2472306_admin-anonymous-person-icon-hd-png-download.png&f=1&nofb=1" title={"Anonimo" + j} description={com}/>)
            aux.push(<Space/>)
        }
        this.comments = aux;
        // this.setState({
        //     comments: aux
        // })
        // console.log(this.state.comments)
    }

    handleComent = (e) => {
        this.setState({
            addComent : e
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let url =  "/" + this.userData.idUsuario + "/comentar";
        let submit = {
        conteudo: this.state.addComent
        };
        api.put(url,submit,{
                headers:{
                    'authorization': localStorage.getItem('token')
                }
            })
        .then(response => {
            console.log(response)
            // this.setState({
            //     comments: this.state.comments.push(this.state.addComent)
            // })
            // console.log(this.state.comments)
            // api.get('/perfil/' + this.userData.idUsuario)
            // .then((response) => {
                // let aux1 = [];
                // let userData = response.data
                // aux1.push(userData)
                // aux1.push(this.posts)
                // this.props.history.push("/Usuario",aux1)
                // window.location.reload();
            // })
            alert("Comentario adicionado com sucesso!")
            this.props.history.push("/")
            .catch((error) => {
                console.log(error)
            });
        })
        .catch(error => {
            console.log(error)
        })
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
                                {this.userData.telefone ?
                                        <a href={"https://web.whatsapp.com/send?1=pt_BR&phone=phone=55" + this.userData.telefone}>
                                            <SiWhatsapp/> {this.userData.telefone}
                                        </a>
                                        :"Não definido"}</p>
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
                    {this.comments.length !== 0 && this.comments }
                    <form onSubmit={this.handleSubmit}>
                        <Space/>
                        <h4>Adicionar um comentário:</h4>
                        <InputTextArea placeholder="Adicionar um comentário..." onChange={(e) => {
                            this.handleComent(e.target.value)
                        }}/>
                        <Space/>
                        <Button type="submit">Comentar</Button>
                    </form>


                </main>
                </PageDefault>
            </>
        )
    }
}

export default PerfilUsuario;
