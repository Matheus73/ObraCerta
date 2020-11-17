import styled from 'styled-components';

export const Caixa = styled.div`

    padding: 0 16px;
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0px 10px 4px rgba(0,0,0,0.25);

input{
    padding: 16px 0;
    color: #000000;
    &::placeholder{
        color: #B5B0B0;
    }
}


`;

export default Caixa;
