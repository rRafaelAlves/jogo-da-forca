import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



`

export const InputTryChar = styled.input`
    width: 180px;
    padding: 6px;
    border-radius: 10px;
    border: 2px solid black;
    background-color: #666;
    color: #fff;
    font-weight: bold;
    transition: ease-in 2ms;

        &:hover{
            opacity: 0.8;;
    }

`

export const InputTryFullName = styled.input`
    width: 180px;
    padding: 6px;
    border-radius: 10px;
    border: 2px solid #999;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    transition: ease-in 0.2s;

        &:hover{
            opacity: 0.8;;
            background-color: #000;
            color: #fff;
        }

`

export const FormDisplay = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const ToogleInput = styled.div`
    width: 130px;
    height: 30px;
    border-radius: 12px;
    padding: 4px;
    margin: 12px 0;
    border: 2px solid black;
    font-weight: bold;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ease-in 0.2s;
    background-color: #444;
    font-size: 14px;

    &:hover{ 
        opacity: 0.8;


}
`

export const ButtonForm = styled.input`

    width: 160px;
    padding: 6px;
    margin: 4px 0;
    border-radius: 10px;
    border: 2px solid #999;
    background-color: #444;
    color: #fff;
    font-weight: bold;
    transition: ease-in 0.2s;
    cursor: pointer;

        &:hover{
            opacity: 0.8;
        }
`