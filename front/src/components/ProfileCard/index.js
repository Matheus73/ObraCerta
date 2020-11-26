import React from 'react';
import Button from '../Button';
import Box from './styles';

/**
 * Representa um Card de perfil.
 * @example <ProfileCard
 *              src="./assets/img.jpg"
 *              title="Fulano"
 *              description="Fulano é legal"
 *              href="/profile/id/0"             
 *          >           
 * @param {object} props
 * @param props.src - Recebe o caminho de uma imagem para ser exibida
 * @param props.title - Título do Card
 * @param props.description - Descrição do Card
 * @param props.href - Recebe um link e gera um botão para esse link
 */
function ProfileCard(props) {
    return(
        <Box>
            <img alt="" src={props.src} />
            <div>
                <strong>{props.title}</strong>
                <p>
                    {props.description.slice(0, 150)}
                    {props.description.length > 150 ? "..." : ""}
                </p>
                {props.href ? 
                    <Button href={props.href} primary>Acessar perfil</Button>
                    :
                    <></>
                }
            </div>
        </Box>
    )
}

export default ProfileCard;