import React from 'react';
import Box from './styles';


function Alert(props) {
    return props.children ? (
        <>
            <Box>
                <div></div>
                <span>{props.children}</span>
            </Box>
        </>
    ):(
        <></>
    );
}

export default Alert;