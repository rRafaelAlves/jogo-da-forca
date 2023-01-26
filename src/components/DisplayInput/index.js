import React from 'react';
import * as C from './styles';

function DisplayInput({modeFullTry, setModeFullTry, onSubmit}){
    return(
        <C.Container>

            <C.ToogleInput onClick={()=>setModeFullTry(!modeFullTry)}>

                <p>Trocar</p>
            </C.ToogleInput>

                <C.FormDisplay onSubmit={(e)=> onSubmit(e)}>

                    {modeFullTry ? <C.InputTryFullName autoComplete='off' type='text' placeholder='Chute a palavra' id='fullName'/>
                     : <C.InputTryChar type='text' autoComplete='off' placeholder='Chute uma letra' id='oneChar'/>}

                
                
                <C.ButtonForm type='submit' value='Chutar' />
                

            </C.FormDisplay>

        </C.Container>
    )
}

export default DisplayInput;