import React from 'react';
import krimps from '../../assets/krimps.svg';
import PageDefault from '../PageDefault';
import Container from './styles';
import Presentation from '../../components/Presentation';

function Sobre(props){
    return(
        <PageDefault loggedIn={props.loggedIn}>
            <Container>
                <h1>Quem somos?</h1>
                    <div>
                    <Presentation
                    width="480px"
                    src={krimps}
                    alt="Logo KRIMPS"

                >

                {/* <img src={krimps} alt="Logo KRIMPS"/> */}



                        <div id='msg'>
                            Somos um grupo de estudantes de engenharia de software da Universidade de Brasília do Campus
                            do Gama (FGA)
                        </div>


                        <div id= "msg">
                            O Projeto consiste em um site para a disciplina de Métodos de desenvolvimento de Software (MDS) da turma
                            do professor George Marsicano Correa.
                        </div>



                </Presentation>
                    </div>

            </Container>
        </PageDefault>
    )
}

export default Sobre;
