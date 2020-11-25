import React from 'react';
import Container, { Card } from './styles';

function Presentation(props) {
    return(
        <Container rotation={props.rotation}>
            <img
                width={props.width}
                height={props.height || "auto"}
                src={props.src}
                alt={props.alt}
            />
            <Card>
                {props.children}
            </Card>
        </Container>
    );
}

export default Presentation;
