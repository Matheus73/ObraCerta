import React from 'react';
import Caixa from './styles';
function Input(props){
    return(
        <Caixa>
        <input type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        />
        </Caixa>
    );
};

export default Input;
