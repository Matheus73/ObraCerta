import React from 'react';
import Box from './styles';

function Button(props) {
    return (
        <>
            {!props.noLabel ? (
                <label>
                    <Box {...props}>{props.children}</Box>
                </label>
            ) : (
                <Box {...props}>{props.children}</Box>
            )}
        </>
    );
}

export default Button;
