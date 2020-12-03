import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import ProfileCard from '../../components/ProfileCard';
import Space from '../../components/Space';
import PageDefault from '../PageDefault';
import api from '../../services/api';

class Listagem extends Component {
    constructor(props){
        super(props);

        this.data = [];
        let history = createHistory();
        let data = history.location.state;
        for(let i in history.location.state){
            this.data.push(data[i]);
        }
    }

    handleClick = (idUser) =>{
        api.get('/perfil/' + idUser)
        .then((response) => {
            let userData = response.data;
            api.get('/' + idUser + '/publicacoes')
            .then((response) => {
                let posts = response.data;
                let data = [];
                data.push(userData);
                data.push(posts);
                this.props.history.push('/Usuario',data)
            })
            .catch((error) => {
                console.log(error)
            });
            
        })
        .catch((error) => {
            console.log(error)
        });

    }

    render() {
        return (
            <>
            <PageDefault>
            <h1>Busca por profissionais...</h1>
            {this.data.length === 0 && 
                <>
                    <Space/>
                    <h1>Não encontrado nenhum profissional</h1>
                </>
            }
            {this.data.map(data => (
                <>
                    <ProfileCard
                        src={data.imagemPerfil}
                        title={data.nomeCompleto}
                        description={data.descricao}
                        onClick={() => {this.handleClick(data.idUsuario)}}
                    />
                    <Space/>
                </>
          ))}
            </PageDefault>
            </>
        );
    }
}

export default Listagem;
