import styled from 'styled-components';

export const Caixa = styled.div`

padding: 0 16px;
display: flex;
align-items: center;
width: 100%;
background: #FFFFFF;
border-radius: 20px;
box-shadow: 0px 10px 4px rgba(0,0,0,0.25);

input{
padding: 16px 0;
flex: 1;
color: #000000;
font-size: 30px;
&::placeholder{
    color: #c61535;
}
}


`;

export default Caixa;
