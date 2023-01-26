import React from 'react';
import * as C from  './styles';


function ForcaChar({countErrors}){

    return(
        <C.Container>
            {countErrors >= 1 &&  <C.Head />}
            {countErrors >= 2 &&  <C.Body />}
            {countErrors >= 3 &&  <C.ArmDir />}
            {countErrors >= 4 &&  <C.ArmEsq />}
            {countErrors >= 5 &&  <C.PeD /> }
            {countErrors >= 6 &&  <C.PeE />}
            
        </C.Container>
    )
}

export default ForcaChar;