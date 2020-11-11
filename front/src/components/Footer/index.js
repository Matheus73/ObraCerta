import React from 'react';
import Container from './styles';
import Item from '../Item/index';

function Footer(props){
    return(
        <Container>
        <footer>

            {/* <Item white href="https://github.com/Matheus73/ObraCerta">Teste</Item><br/> */}
            <a href="https://github.com/Matheus73/ObraCerta">Github</a>
            <a href="https://www.instagram.com/akitaonrails/?hl=pt-br">Instagram</a>
            <a href="https://twitter.com/whindersson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>
            <a href="#">outro</a>
            <a href="#">mais</a>

        </footer>
        </Container>
        )
};

export default Footer;
