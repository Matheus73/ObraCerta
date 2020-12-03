import React from 'react';
import Box from './styles';


function Alert(props) {
    return props.children ? (
        <>
            <Box>
                {props.children}
            </Box>
        </>
    ):(
        <></>
    );
}

export default Alert;