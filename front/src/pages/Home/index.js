import React from 'react';

import PageDefault from '../../components/PageDefault';
import Input from '../../components/Input';
import Presentation from '../../components/Presentation';
import imgPresetation from '../../assets/imgPresetation.png'
import Space from '../../components/Space';

function Home(){
    return (
        <PageDefault>
            <Input type="search" placeholder="Pesquise..."/>
            <Space size="85px" sizeMobile="45px"/>
            <Presentation
                width="400px"
                src={imgPresetation}
                >
            <div>
                <b>Aqui você encontra o que procura!</b><br/>
                Os melhores profissionais para a sua obra!
            </div>
            </Presentation>
        </PageDefault>
    );
}

export default Home;
