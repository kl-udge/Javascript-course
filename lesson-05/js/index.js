// Functions + Params + variablw
// Rock Paper Scissors Functionalities



function playGame(playerMove) {
    let computerMove = computerMove();
    let result = '';


    if(playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'We tied, Lets try again';
        } else if(computerMove === 'paper') {
            result = 'You lost, try again';
        } else if(computerMove === 'scissors') {
            result = 'You won!';
        }
    }

    if (playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'You won!';
        } else if(computerMove === 'paper') {
            result = 'We tied, lets try again';
        } else if(computerMove === 'scissors') {
            result = 'You lost. Try again';
        }
    }

    if(playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'You lost. Try again';
        } else if(computerMove === 'paper') {
            result = 'You won!';
        } else if(computerMove === 'scissors') {
            result = 'We tied! lets try again';
        }
    }


    alert(`You picked ${playerMove} and I picked ${computerMove}. ${result}.`)
}


function computerMove() {
    const  randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >=0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if(randomNumber > 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if(randomNumber > 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
}

// Checking eligible people for discount during the holidays according to their age
const isHoliday = false;
let message = '';

function isEligible() {
    if(isHoliday) {
        if(age <= 6 || age >= 65) {
            message = 'You will recieve a discount';
        } else {
            message = 'you are age limits you from a discount';
        }
    } else if(!isHoliday) {
        if(age <= 6 || age >= 65) {
            message = 'you are eligble for a discount wait for the holidays'
        } else {
            message = 'you are not eligible for a discount'
        }
    }
};