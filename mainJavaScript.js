let playerChoice;
let computerChoice;


document.getElementById('rock').addEventListener('click', () =>{
    playerChoice = 0;
    document.getElementById('playerChoice').src = "Resources/rock.png";
})

document.getElementById('paper').addEventListener('click', () =>{
    playerChoice = 0;
    document.getElementById('playerChoice').src = "Resources/paper.png";
})

document.getElementById('scissor').addEventListener('click', () =>{
    playerChoice = 0;
    document.getElementById('playerChoice').src = "Resources/scissor.jpg";
})

document.getElementById('lizard').addEventListener('click', () =>{
    playerChoice = 0;
    document.getElementById('playerChoice').src = "Resources/lizard.png";
})

document.getElementById('spock').addEventListener('click', () =>{
    playerChoice = 0;
    document.getElementById('playerChoice').src = "Resources/spock.jpg";
})

document.getElementById('generate').addEventListener('click', () => {
    computerChoice = Math.round(Math.random()*4);
    console.log(computerChoice);

    if (computerChoice === 0){
        document.getElementById('computerChoice').src = "Resources/rock.png";
    } else if (computerChoice === 1){
        document.getElementById('computerChoice').src = "Resources/paper.png";
    } else if (computerChoice === 2){
        document.getElementById('computerChoice').src = "Resources/scissor.jpg";
    }else if (computerChoice === 3){
        document.getElementById('computerChoice').src = "Resources/lizard.png";
    }else {
        document.getElementById('computerChoice').src = "Resources/spock.jpg";
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