import React, { Component } from 'react';

import PageDefault from '../../pages/PageDefault';
import Input from '../../components/Input';
import Presentation from '../../components/Presentation';
import Space from '../../components/Space';
import Card from '../../components/Card';
import CardGroup from '../../components/CardGroup';

import imgPresetation from '../../assets/imgPresetation.png';
import imgCard1 from '../../assets/VerticalCards/HomeCards/Card1.svg';
import imgCard2 from '../../assets/VerticalCards/HomeCards/Card2.svg';
import imgCard3 from '../../assets/VerticalCards/HomeCards/Card3.svg';
import Button from '../../components/Button';

class Home extends Component {
<<<<<<< Updated upstream
=======
    constructor(props) {
        super(props);

        this.url = "http://localhost:3001/search?searchBar"
        this.data = {
            searchBar: '',
            categoryFilter: '',
            locality: localStorage.getItem('localidade') == null || '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let bar = '';
        let loc = '&locality';

        if( this.data.searchBar !== ''){
            bar = '=' + this.data.searchBar;
        }
        if(localStorage.getItem("localidade") !== 'null'){
            loc += '=' + localStorage.getItem('localidade');
        }
        let url_search = this.url + bar +  loc   + '&categoryFilter';

        console.log(url_search)

        axios.get(url_search)
        .then((response) => {
            console.log(response)
            const data = response.data
            this.props.history.push('/Listagem',data);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    handleCategory = (categoria) => {

        let loc = '&locality';

        if(localStorage.getItem("localidade") !== 'null'){
            loc += '=' + localStorage.getItem('localidade');
        }

        let url_search = this.url + loc  + '&categoryFilter=' + categoria;
        console.log(url_search)

        axios.get(url_search)
        .then((response) => {
            console.log(response)
            const data = response.data
            this.props.history.push('/Listagem',data);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    handleChangeSearch = (e) => {
        this.data.searchBar = e.target.value
    };
>>>>>>> Stashed changes

    render() {
        return (
            <PageDefault loggedIn={this.props.loggedIn}>
                <Input type="search" placeholder="Pesquise..." />

                <Space/>
                <CardGroup>
                    <Button>Pedreiro</Button>
                    <Button>Serralheiro</Button>
                    <Button>Pintor</Button>
                    <Button>Eletricista</Button>
                    <Button>Macerneiro</Button>
                    <Button>Encanador</Button>
                </CardGroup>

                <Space size="85px" sizeMobile="55px" />
                <Presentation
                    width="400px"
                    src={imgPresetation}
                    rotation="16deg"
                    alt=""
                >
                    <div>
                        <b>Aqui você encontra o que procura!</b><br />
                    Os melhores profissionais para a sua obra!
                </div>
                </Presentation>

                <Space size="85px" sizeMobile="10px" />
                <CardGroup>
                    <Card vertical>
                        <img alt="" src={imgCard1} />
                        <p>Encontre a pessoa certa de maneira rápida e fácil!</p>
                    </Card>
                    <Card>
                        <img alt="" src={imgCard2} />
                        <p>Avalie profissionais pelo seus serviços!</p>
                    </Card>
                    <Card>
                        <img alt="" src={imgCard3} />
                        <p>Publique seu projeto para que profissionais te encontrem!</p>
                    </Card>
                </CardGroup>
            </PageDefault>
        );
    }
}

export default Home;
