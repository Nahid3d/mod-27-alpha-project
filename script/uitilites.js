function alphabetArandom(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // get random index number genarate 
    const randomIndex = Math.random() * 25;
    const index =Math.round(randomIndex);
    // console.log(index);

    // problems part 
    const alphabet = alphabets[index]
    // console.log('Random alphabet:', alphabet)
    return alphabet;
}

// set setBackGroundColor error part 
function setBackGroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
// removed bg 
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}