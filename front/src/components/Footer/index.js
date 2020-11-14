import React from 'react';
import Container from './styles';
import {FaGithub, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';
// import Item from '../Item/index';


function Footer(){
    return(
        <Container>

            <div>
                <FaFacebook /><a href="https://www.facebook.com/jovemnerd">Facebook</a>
            </div>

            <div>
                <FaGithub /> <a href="https://github.com/Matheus73/ObraCerta">Github</a>
            </div>
        
            <div>
                <FaInstagram /> <a href="https://www.instagram.com/akitaonrails/?hl=pt-br">Instagram</a>
            </div>

            <div>
                <FaTwitter /> <a href="https://twitter.com/whindersson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>
            </div>

        </Container>
        )
};

export default Footer;
