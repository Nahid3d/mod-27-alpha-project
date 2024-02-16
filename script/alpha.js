function play(){
    const homeSection =document.getElementById('home-screen');
    homeSection.classList.add('hidden')

    const playGroundSection =document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden')
    continueGame();
   
}

function continueGame(){
    const alphabet = alphabetArandom();
    // console.log('you are random alphabet:', alphabet)

    // alphabet set my screen Display pop up show it 
    const displayAlphabet = document.getElementById('current-alphabet');
    displayAlphabet.innerText = alphabet;
  

    // set bg 
    setBackGroundColor(alphabet);
}
function handelKeyBoardPress(event){
   const playerPressed = event.key;
   console.log('plear pressed ',playerPressed);

   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expressed = currentAlphabet.toLowerCase();
   console.log(playerPressed , expressed);


//   point check and matched 
 if( playerPressed === expressed){
    console.log('you are get point');
    console.log('you have press curtly',expressed);
   //  score point add 
   const currentScoreElement = document.getElementById('score');
   const currentScoreText = currentScoreElement.innerText;
   const currentScore = parseInt(currentScoreText)
   console.log(currentScore);
   const newScore = currentScore + 1;
   currentScoreElement.innerText = newScore;


    removeBackgroundColorById(expressed);
    continueGame();
    
 }
 else{
    console.log('Your are missed . and you loss life ');
   // life count 
   const currentLifeElement = document.getElementById('life');
   const currentLifeText = currentLifeElement.innerText;
   const currentLife = parseInt(currentLifeText);
   const newlife = currentLife - 1;
   currentLifeElement.innerText = newlife;
 }

}
document.addEventListener('keyup',handelKeyBoardPress);