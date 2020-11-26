import React from 'react';
import Button from '../Button';
import Box from './styles';

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
                    <Button primary>Acessar perfil</Button>
                    :
                    <></>
                }
            </div>
        </Box>
    )
}

export default ProfileCard;