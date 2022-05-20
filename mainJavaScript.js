let playerChoice;
let computerChoice;


document.getElementById('rock').addEventListener('click', () =>{
    playerChoice = 0;
    document.getElementById('playerChoice').src = "Resources/rock.png";
    document.getElementById(`playerChoice`).style.visibility = "visible";
})

document.getElementById('paper').addEventListener('click', () =>{
    playerChoice = 1;
    document.getElementById('playerChoice').src = "Resources/paper.png";
    document.getElementById(`playerChoice`).style.visibility = "visible";
})

document.getElementById('scissor').addEventListener('click', () =>{
    playerChoice = 2;
    document.getElementById('playerChoice').src = "Resources/scissor.jpg";
    document.getElementById(`playerChoice`).style.visibility = "visible";
})

document.getElementById('lizard').addEventListener('click', () =>{
    playerChoice = 3;
    document.getElementById('playerChoice').src = "Resources/lizard.png";
    document.getElementById(`playerChoice`).style.visibility = "visible";
})

document.getElementById('spock').addEventListener('click', () =>{
    playerChoice = 4;
    document.getElementById('playerChoice').src = "Resources/spock.jpg";
    document.getElementById(`playerChoice`).style.visibility = "visible";
})

document.getElementById('generate').addEventListener('click', () => {
    computerChoice = Math.round(Math.random()*4);
    console.log(computerChoice);

    if (computerChoice === 0){
        document.getElementById('computerChoice').src = "Resources/rock.png";
        document.getElementById(`computerChoice`).style.visibility = "visible";
    } else if (computerChoice === 1){
        document.getElementById('computerChoice').src = "Resources/paper.png";
        document.getElementById(`computerChoice`).style.visibility = "visible";
    } else if (computerChoice === 2){
        document.getElementById('computerChoice').src = "Resources/scissor.jpg";
        document.getElementById(`computerChoice`).style.visibility = "visible";
    }else if (computerChoice === 3){
        document.getElementById('computerChoice').src = "Resources/lizard.png";
        document.getElementById(`computerChoice`).style.visibility = "visible";
    }else {
        document.getElementById('computerChoice').src = "Resources/spock.jpg";
        document.getElementById(`computerChoice`).style.visibility = "visible";
    }
});

document.getElementById('win').addEventListener('click', () => {
    if (playerChoice === computerChoice){
        document.getElementById('result').innerHTML = "DRAW!"
    }else if(computerChoice === 0 && playerChoice === 1 || computerChoice === 0 && playerChoice === 4){
        document.getElementById('result').innerHTML = "PLAYER WINS!";
    }
    else if(computerChoice === 1 && playerChoice === 2 || computerChoice === 1 && playerChoice ===3 ){
        document.getElementById('result').innerHTML = "PLAYER WINS!";
    }
    else if(computerChoice === 2 && playerChoice === 0 || computerChoice === 2 && playerChoice === 4){
        document.getElementById('result').innerHTML = "PLAYER WINS!";
    }
    else if(computerChoice === 3 && playerChoice === 0 || computerChoice === 3 && playerChoice ===2){
        document.getElementById('result').innerHTML = "PLAYER WINS!";
    }
    else if (computerChoice === 4 && playerChoice === 1 || computerChoice === 4 && playerChoice === 3){
        document.getElementById('result').innerHTML = "PLAYER WINS!";
    }
    else{
        document.getElementById('result').innerHTML = "COMPUTER WINS!";
    }
});

document.getElementById('reset').addEventListener('click', () => {
    location.reload();
})


