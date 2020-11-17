import React from 'react';
import Caixa from './styles';
function Input(props){
    return(
        <Caixa>
            <input {...props}/>
        </Caixa>
    );
};

export default Input;
