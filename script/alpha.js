function play(){
    const homeSection =document.getElementById('home-screen');
    homeSection.classList.add('hidden')

    const playGroundSection =document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden')
}

function alphabetArandom(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabe = alphabetString.split('');
    console.log(alphabe);

    // get random index number genarate 
    const randomIndex = Math.random()*25;
    const index =Math.round(randomIndex);
    console.log(index);

    // problems part 
    const alphabet = alphabets[index]
    console.log(index ,alphabet)
    return alphabet;
}
// problems part 
function continueGame(){
    const alphabet = alphabetArandom();
}