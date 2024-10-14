const scores = JSON.parse(localStorage.getItem('scores')) || {
    Wins: 0,
    Loses: 0,
    Ties: 0
}


function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber > 0 && randomNumber < 1/3) {
        computerMove = 'paper';
    } else if (randomNumber > 1/3 && randomNumber < 2/3) {
        computerMove = 'rock';
    } else if (randomNumber > 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let results = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            results = 'We tied, lets try again';
        } else if (computerMove === 'paper') {
            results = 'You lost';
        } else if (computerMove === 'scissors') {
            results = 'You won!';
        }
    }

    if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            results = 'We tied, lets try again';
        } else if (computerMove === 'scissors') {
            results = 'You lost';
        } else if (computerMove === 'rock') {
            results = 'You won!';
        }
    }

    if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
            results = 'We tied, lets try again';
        } else if (computerMove === 'paper') {
            results = 'You won!';
        } else if (computerMove === 'rock') {
            results = 'You lost'
        }
    }

    if (results === 'You won!') {
        scores.wins +=1;
    } else if (results === 'You lost') {
        scores.loses +=1;
    } else if (results === 'We tied, lets try again') {
        scores.ties +=1;
    }
    localStorage.setItem('scores', JSON.stringify(scores));

    updateScoreElement();

    document.querySelector('.results__element')
            .innerHTML = results;

    document.querySelector('.choices__element')
            .innerHTML = `You picked ${playerMove} and I picked ${computerMove}. ${results}.`;
        
}

function updateScoreElement() {
    document.querySelector('.scores__element')
    .innerHTML = `Wins: ${scores.wins} Loses: ${scores.loses} Ties: ${scores.ties}`;
}
