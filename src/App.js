import React from 'react';
import Dica from './components/Dica';
import DisplayInput from './components/DisplayInput';
import ForcaChar from './components/ForcaChar';
import ForcaPlat from './components/ForcaPlat';
import Letreiro from './components/Letreiro';
import {Container, GameContainer} from './styles/Global.Styles'
import { Words } from './Words';




function App() {

  const [currentWord, setCurrentWord] = React.useState({});
  const [arrayAcertos, setArrayAcertos] = React.useState([]);
  const [countErrors, setCountErrors] = React.useState(0);

  React.useEffect(()=>{
    const randomWord = Words[Math.floor(Math.random() * Words.length)];
    setCurrentWord(randomWord);

      
  },[])


  const [modeFullTry, setModeFullTry] = React.useState(false);




  function onSubmit(e){
    e.preventDefault();

    if(modeFullTry){

      const acertou = e.target.fullName.value === currentWord.palavra;

      if(acertou === false){
        setCountErrors(countErrors + 6);
      }else{
        
        const word = [];

        for(let i = 0; i <= e.target.fullName.value.length - 1; i++){
            word.push(e.target.fullName.value[i]);
          }

          setArrayAcertos(word)
      }

    }else{

      const acertou = currentWord.palavra.includes(e.target.oneChar.value);
      
      if(acertou === false){
        setCountErrors(countErrors + 1);
      }else{

        let index = currentWord.palavra.indexOf(e.target.oneChar.value);
        setArrayAcertos([...arrayAcertos, arrayAcertos[index] = e.target.oneChar.value])
      }
     
    }

    
  }

  console.log(arrayAcertos)

  return (
    <Container>
      <Letreiro 
      currentWord={currentWord.palavra}
      arrayAcertos={arrayAcertos}
       />
      <GameContainer>
        <ForcaPlat />
        <ForcaChar countErrors={countErrors} />
        </GameContainer>

        <DisplayInput
         modeFullTry={modeFullTry}
         setModeFullTry={setModeFullTry}
         onSubmit={onSubmit}
         />

        <Dica dica={currentWord.dica} />
    </Container>
  );
}

export default App;
