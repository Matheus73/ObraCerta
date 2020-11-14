import React from 'react';

import PageDefault from '../../components/PageDefault';
// import Input from '../../components/Input';
import Presentation from '../../components/Presentation';
import imgPresetation from '../../assets/imgPresetation.png'



function Home(){
    return (
        <PageDefault>

            <Presentation
                width="400px"
                src={imgPresetation}
            >
            <div>Os melhores profissionais para a sua obra!</div>
            </Presentation>
        </PageDefault>
    );
}

export default Home;
