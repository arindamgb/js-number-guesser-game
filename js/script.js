// Get Elements
let startBtn = document.querySelector('#startButton');
let inputField = document.querySelector('#userGuess');
let submitBtn = document.querySelector('#submitGuess');
let chance = document.querySelector('#chancesLeft');
let hint = document.querySelector('#hint');
let result = document.querySelector('#result');




// Add Event Listener
startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', checkAnswer);


// global vars
let low = 1;
let high = 10;
let correct_ans;
let chanceLeft;




// Functions
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  

function startGame() {

    inputField.disabled = false;
    submitBtn.disabled = false;

    chanceLeft = 3;
    correct_ans = getRandomIntInclusive(low, high);
    console.log(correct_ans);

    chance.innerText = `${chanceLeft}`;
    hint.innerText = `Try to guess the number between ${low} and ${high}.`;
    result.innerText = '';
}


function checkAnswer() {
    
    if(inputField.value > correct_ans) {
        chanceLeft--;
        let message = 'Correct answer is smaller!';
        setMessage(chanceLeft, message);
        // console.log('smaller');
    } else if(inputField.value < correct_ans) {
        chanceLeft--;
        let message = 'Correct answer is greater!';
        setMessage(chanceLeft, message);
        // console.log('greater');
    } else if(inputField.value == correct_ans) {
        let message = 'You Win!';
        setResult(message);
        // console.log('Correct answer');
    }

    if(chanceLeft == 0) {
        let message = 'You Lose!';
        setResult(message);
    }

}


function setMessage(chanceCount, hintMsg) {
    chance.innerText = `${chanceCount}`;
    hint.innerText = `${hintMsg}`;
    inputField.value = '';
}

function setResult(resultMsg) {
    result.innerText = `${resultMsg}`;
    hint.innerText = 'Click Start to play again!';
    chance.innerText = '';
    
    inputField.value = '';
    inputField.disabled = true;
    submitBtn.disabled = true;
}