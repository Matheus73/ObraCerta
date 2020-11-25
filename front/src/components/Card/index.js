import React from 'react';
import Box from './styles';

/**
 * Representa um Card na página.
 * Pode aninhar tags de imagem e texo
 * @example <Card>
 *              <img src="#">
 *              <b>Title</b>
*               <p>Descripition</p>
 *          </Card>
 * @param {object} props
 * @param props.vertical - Orienta o Card na vertical.
 * @param props.horizontal - Orienta o Card na horizontal.
 * @param {string} props.width - width="{CSS Unit}" - Controla a largura maxima do Card
 * @param {string} props.height - height="{CSS Unit}" - Controla a altura mínima do Card
 */
function Card(props) {
    return(
        <Box width={props.width} height={props.height} >
            {props.children}
        </Box>
    );
}

export default Card;
