import React from 'react';
import {FaGithub, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';
import Item from '../Item';
import Container from './styles';

function Footer(props){
    return(
        <Container orange={props.orange}>
            <Item white={props.white} href="#"><FaFacebook />Facebook</Item>
            <Item white={props.white} href="#"><FaInstagram />Instagram</Item>
            <Item white={props.white} href="#"><FaTwitter />Twitter</Item>
            <Item white={props.white} href="https://github.com/Matheus73/ObraCerta"><FaGithub />Github</Item>
        </Container>
    );  
};

export default Footer;
