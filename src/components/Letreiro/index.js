import React from 'react';
import * as C from './styles';

function Letreiro({currentWord, arrayAcertos}){

    const word = [];

   if(currentWord){
    for(let i = 0; i <= currentWord.length - 1; i++){
        word.push(currentWord[i]);
   }
}
console.log(arrayAcertos)

    return(
        <C.Container>

            {word.map((element, index)=>(
                <C.Casa key={index}>{arrayAcertos.includes(element) ? element : '_'}</C.Casa>
            ))}


        </C.Container>
    )

}

export default Letreiro;