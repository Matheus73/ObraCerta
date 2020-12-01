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
 * @param {string} props.src - Recebe o caminho de uma imagem para ser exibida
 * @param {string} props.title - Título do Card
 * @param {string} props.description - Descrição do Card
 * @param {string} props.href - Recebe um link e gera um botão para esse link
 */
function ProfileCard(props) {
    return(
        <Box>
            <img alt="" src={props.src} />
            <div>
                <strong>{props.title}</strong>
                {props.description ?
                    <p>
                        {props.description.slice(0, 100)}
                        {props.description.length > 150 ? "..." : ""}
                    </p>
                    :<></>
                }
                {props.onClick ?
                    <Button noLabel primary onClick={props.onClick}>Acessar perfil</Button>
                    :<></>
                }
            </div>
        </Box>
    )
}

export default ProfileCard;
