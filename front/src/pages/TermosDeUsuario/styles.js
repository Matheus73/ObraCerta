import styled from 'styled-components';

export const Container = styled.div`

    padding: 30px 50px;
    margin-top: 15px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    border-radius: 30px;

h1, h2, h3{
    text-align: center;
    padding: 15px 0;
}
p {
    text-align: justify;
    padding: 6px 0;
}
ul, ol{
    padding-left: 40px;
    text-align: justify;
}

@media screen and (max-width: 320px){
    padding: 30px 20px; 
}

`;

export default Container;
