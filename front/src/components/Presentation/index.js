import React from 'react';
import Container, { Box } from './styles';

function Presentation(props) {
    return(
        <Container noBorder={props.noBorder} rotation={props.rotation}>
            <img
                width={props.width}
                height={props.height || "auto"}
                src={props.src}
                alt={props.alt}
            />
            <Box>
                {props.children}
            </Box>
        </Container>
    );
}

export default Presentation;
