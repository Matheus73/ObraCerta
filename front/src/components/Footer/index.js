import React from 'react';
import Container from './styles';
import Item from '../Item/index';

function Footer(props){
    return(
        <Container>
        <footer>
            <ol>
            {/* <Item white href="https://github.com/Matheus73/ObraCerta">Teste</Item><br/> */}
            <a color="#000000" href="https://github.com/Matheus73/ObraCerta">Github</a><br/>
            <a Color="#f8f8" href="https://www.instagram.com/akitaonrails/?hl=pt-br">Instagram</a><br/>
            <a href="https://twitter.com/whindersson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>


            </ol>
        </footer>
        </Container>
        )
};

export default Footer;
