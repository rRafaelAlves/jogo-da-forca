import styled from "styled-components";

export const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
margin-top: 50px;
margin-right: 125px;
`

export const Head = styled.div`
position: absolute;
border-radius: 50%;
border: 5px solid black;
width: 30px;
height: 30px;
top: 0;
`

export const Body = styled.div`
position: absolute;
height: 40px;
border: 5px solid black;
width: 5px;
top: 25px;
`

export const ArmEsq = styled.div`
position: absolute;
border: 5px solid black;
height: 40px;
width: 5px;
transform: rotate(130deg);
top: 30px;
left: 10px;
`

export const ArmDir = styled.div`
position: absolute;
border: 5px solid black;
width: 5px;
height: 40px;
transform: rotate(45deg);
top: 30px;
right: 10px;
`

export const PeE = styled.div`
position: absolute;
border: 5px solid black;
height: 40px;
width: 5px;
transform: rotate(130deg);
top: 60px;
left: 10px;
`

export const PeD = styled.div`
position: absolute;
border: 5px solid black;
height: 40px;
width: 5px;
transform: rotate(45deg);
top: 60px;
right: 10px;
`