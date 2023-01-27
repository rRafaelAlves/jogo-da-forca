import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;

}   
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #dfdfdf;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const GameContainer = styled.div`
display: flex;
width: 300px;
height: 150px;
justify-content: space-between;
background-color: #fff;

`