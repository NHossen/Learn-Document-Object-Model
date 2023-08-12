function makeRed(){
    document.body.style.backgroundColor="red";//on line event listeners
}

//option 2
const makeButtonYellow = document.getElementById('make-yellow');
makeButtonYellow.onclick=makeYellow;

function makeYellow(){
    document.body.style.backgroundColor="yellow";
}
//option another

const makeGreenButton=document.getElementById('make-green');
makeGreenButton.onclick=function makeGreen(){
    document.body.style.backgroundColor='green'
}