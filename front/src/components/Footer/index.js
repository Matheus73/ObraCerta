import React from 'react';
import {FaGithub, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';
import styled from 'styled-components';
import {shade} from 'polished';

function reload(color){
     const Container = styled.footer`
        flex-wrap: wrap;
        position: relative;
        width: 100%;
        height: 100px;
        bottom: 0px;
        left: 0px;
        margin-top: 100px;
        background: ${color || "#14D0AE"};
        border-radius: 60px 60px 0px 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;


    a {
        display: inline-block;
        margin: 25px 25px 0 25px;
        color: #E5E5E5;
        text-decoration: none;
        transition: color 0.2s;
        &:hover{
            color: ${shade(0.2, '#888989')}
        }

    }
    `;

    return Container
}


function Footer(props){
            var Container = reload(props.color)
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
            );

    
};

export default Footer;
