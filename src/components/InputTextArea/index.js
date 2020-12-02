import React from 'react';
import Box from './styles';

function InputTextArea(props) {
    return(
        <Box {...props}>
            <textarea {...props}/>
        </Box>
    );
}

export default InputTextArea;