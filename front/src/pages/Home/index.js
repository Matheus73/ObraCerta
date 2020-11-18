import React from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Presentation from '../../components/Presentation';
import Space from '../../components/Space';
import Card from '../../components/Card';
import CardGroup from '../../components/CardGroup';

import imgPresetation from '../../assets/imgPresetation.png';
import imgCard1 from '../../assets/VerticalCards/HomeCards/Card1.svg';
import imgCard2 from '../../assets/VerticalCards/HomeCards/Card2.svg';
import imgCard3 from '../../assets/VerticalCards/HomeCards/Card3.svg';

function Home(){
    return (
        <PageDefault>
            <Input type="search" placeholder="Pesquise..."/>

            <Space size="85px" sizeMobile="55px"/>
            <Presentation
                width="400px"
                src={imgPresetation}
                rotation="16deg"
            >
                <div>
                    <b>Aqui você encontra o que procura!</b><br/>
                    Os melhores profissionais para a sua obra!
                </div>
            </Presentation>
            <Space size="85px" sizeMobile="10px"/>
            <CardGroup>
                <Card vertical>
                    <img src={imgCard1}/>
                    <p>Encontre a pessoa certa de maneira rápida e fácil!</p>
                </Card>
                <Card>
                    <img src={imgCard2}/>
                    <p>Avalie profissionais pelo seus serviços!</p>
                </Card>
                <Card>
                    <img src={imgCard3}/>
                    <p>Publique seu projeto para que profissionais te encontrem!</p>
                </Card>
            </CardGroup>
        </PageDefault>
    );
}

export default Home;
