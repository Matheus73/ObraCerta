import React from 'react';
import krimps from '../../assets/krimps.svg';
import PageDefault from '../PageDefault';
import Container from './styles';
import Presentation from '../../components/Presentation';
import Space from '../../components/Space';
import Card from '../../components/Card';
import CardGroup from '../../components/CardGroup';
import Ped from '../../assets/VerticalCards/SobreCards/Ped.svg';
import Sam from '../../assets/VerticalCards/SobreCards/Sam.svg';
import Rob from '../../assets/VerticalCards/SobreCards/Rob.svg';
import Mat from '../../assets/VerticalCards/SobreCards/Mat.svg';
import Ig from '../../assets/VerticalCards/SobreCards/Ig.svg';
import Kess from '../../assets/VerticalCards/SobreCards/Kess.svg';


function Sobre(props){
    return(
        <PageDefault loggedIn={props.loggedIn}>
            <Container>
                <h1>Quem somos?</h1>
                    <div>
                <Space size="85px" sizeMobile="55px" />

                    <Presentation
                    width="480px"
                    src={krimps}
                    alt="Logo KRIMPS"

                >

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
                <Space size="85px" sizeMobile="10px" />

                    <CardGroup>
                        <Card vertical>
                        <img alt="" src={Mat} />
                        <a href="https://github.com/Matheus73" target="_blank" rel="noopener noreferrer">Matheus Gabriel A. Rodrigues</a>
                        <p>CEO do grupo</p>
                        </Card>

                        <Card vertical>
                        <img alt="" src={Ped} />
                        <a href="https://github.com/Pedrok99" target="_blank" rel="noopener noreferrer">Pedro Henrique V. Lima</a>
                        <p>Desenvolvedor Back-end</p>
                        </Card>

                        <Card vertical>
                        <img alt="" src={Ig} />
                        <a href="https://github.com/igorq937" target="_blank" rel="noopener noreferrer">Igor Queiroz Lima</a>
                        <p>Desenvolvedor Front-end</p>
                        </Card>

                        <Card vertical>
                        <img alt="" src={Sam} />
                        <a href="https://github.com/SamuelNoB" target="_blank" rel="noopener noreferrer">Samuel Nogueira Bacelar</a>
                        <p>Desenvolvedor Back-end</p>
                        </Card>

                        <Card vertical>
                        <img alt="" src={Kess} />
                        <a href="https://github.com/kessJhones" target="_blank" rel="noopener noreferrer">Kess Jhones</a>
                        <p>Desenvolvedor Back-end</p>
                        </Card>

                        <Card vertical>
                        <img alt="" src={Rob} />
                        <a href="https://github.com/sayuck" target="_blank" rel="noopener noreferrer">Roberto Martins da Nóbrega</a>
                        <p>Desenvolvedor Front-end</p>
                        </Card>
                    </CardGroup>

            </Container>
        </PageDefault>
    )
}

export default Sobre;
