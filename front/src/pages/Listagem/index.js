import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import ProfileCard from '../../components/ProfileCard';
import Space from '../../components/Space';
import PageDefault from '../PageDefault';
import axios from 'axios';

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
        axios.get('http://localhost:3001/perfil/' + idUser)
        .then((response) => {
            let userData = response.data;
            console.log(userData);
            axios.get('http://localhost:3001/' + idUser + '/publicacoes')
            .then((response) => {
                let posts = response.data;
                console.log(posts);
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
            {this.data.map(data => (
                <>
                    <ProfileCard
                        src="https://obracertaupload.s3.amazonaws.com/f9f02e7a-142f-4223-ac63-3987dd1c16db-photo%20perfil.jpg"
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
