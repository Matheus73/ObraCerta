import React from 'react';
import Box from './styles';

function InputSelect(props) {
    return (
        <Box>
            <label>
                {props.label}<br/>
                <select {...props}>
                    {props.children}
                </select>
            </label>
        </Box>
    );
}

export default InputSelect;
