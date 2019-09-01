//create a secret number
var secretNumber = 37;

//ask user for guess
var guess = prompt('Guess a number');

//check if guess is right
if (Number(guess) === secretNumber) {
  alert('You got it right!');
}

// check if guess is higher
else if (Number(guess) > secretNumber) {
  alert(
    'The number you have entered is higher than the actual number, guess again.'
  );
}

//check if guess is  lower
else {
  alert(
    'The number you have entered is lower than the actual number, guess again.'
  );
}
