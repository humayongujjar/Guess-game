// Generate a random number between 1 and 25
const number = Math.trunc(Math.random() * 25 + 1);
// Initialize the score
let score = 5;
let highScore = 0;
// On Check Click
document.querySelector('.check').addEventListener('click', function () {
    // Get the user's guess
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    //  When the Guess is empty
    if (!guess) {
        if (score > 0) {
            document.querySelector('.H').textContent = 'Please Enter a Number';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost! Please Restart';
            document.querySelector('.guess').style.display = 'none';
            document.querySelector('.check').style.display = 'none';
        }
        //  When the Guess is Correct
    } else if (guess === number) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = number;
        document.querySelector('.H').textContent = 'Congrats! YOU GUESSED THE NUMBER';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        //  When the Guess is Close
    } else if (guess === number - 1 || guess === number + 1) {
        if (score > 0) {
            document.querySelector('.H').textContent = 'Great! You are close..';
            document.querySelector('.message').textContent = 'Keep Guessing...';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.H').textContent = 'You lost! Please Restart';
            document.querySelector('.guess').style.display = 'none';
            document.querySelector('.check').style.display = 'none';
        }
        //  When the Guess is high or low
    } else if (guess !== number) {
        if (score > 0) {
            document.querySelector('.H').textContent = guess > number ? 'To High!!' : 'Too Low!!';
            document.querySelector('.message').textContent = 'Keep Guessing...';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.H').textContent = 'You lost! Please Restart';
            document.querySelector('.guess').style.display = 'none';
            document.querySelector('.check').style.display = 'none';
        }
    }

});
//On restart button Click
document.querySelector('.again').addEventListener('click', function () {
    const number = Math.trunc(Math.random() * 25 + 1);
    score = 5;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').style.display = 'block';
    document.querySelector('.check').style.display = 'block';
    document.querySelector('.H').textContent = 'Guess My Number';
});
