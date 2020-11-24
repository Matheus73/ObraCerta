import styled from 'styled-components';

export const Container = styled.div`

    padding: 10px 10px;
    margin-top: 15px;
    align-items: center;
    width: 100%;
    border-radius: 30px;


h1, h2, h3{
    text-align: center;
    padding: 15px 0;
}
img{
    position: relative;
    max-width: 480px;
    border-radius: 20px;
    padding: 20px;
}
div{
    position: relative;
    display: flex;
    flex-direction: row;
    text-align: center;
    padding: 30px 15px;


}
#group{
    flex-direction: column;
    margin-top: 40px;
}
#msg{
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 50px;
}



/* @media screen and (max-width: 320px){
    padding: 30px 20px;
} */

`;

export default Container;
