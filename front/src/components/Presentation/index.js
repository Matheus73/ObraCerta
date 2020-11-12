import React from 'react';
import Container from './styles';

function Presentation(props) {
    return(
        <Container>
            <img
                width={props.width}
                height={props.height || "auto"}
                src={props.src}
                alt={props.alt}
            />
            <div className="card">
                {props.children}
            </div>
        </Container>
    );
}

export default Presentation;