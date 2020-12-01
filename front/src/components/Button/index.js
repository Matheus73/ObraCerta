import React from 'react';
import Box from './styles';

function Button(props) {
    return(
        <label>
            <Box {...props}>{props.children}</Box>
        </label>
    );
}

export default Button;