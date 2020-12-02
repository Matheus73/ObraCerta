import React from 'react';
import InputMask from 'react-input-mask';
import Caixa from '../Input/styles';
function Input2Mask(props){
    return(
        <Caixa>
            <InputMask {...props}/>
        </Caixa>
    );
};

export default Input2Mask;
