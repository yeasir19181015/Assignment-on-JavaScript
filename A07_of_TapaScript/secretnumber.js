// 2. Build the Secret Number Guessing Game
// Create the project as explained in the video. 


/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prompt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again


    const min = 1;
    const max = 10;
function secretNumberGuessingGame() {
    
    console.log("Getting Started With Secret Number Guessing Game");

    const secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
    let numberOfAttempts = 0;
    let guessingNumber = null;
   
    console.log("Try to guess a number between 1 and 10.");

    while(guessingNumber !== secretNumber){
         const guessPrompt = prompt("Enter your guess: ");
          guessingNumber = parseInt(guessPrompt);

          
        if (isNaN(guessingNumber) || guessingNumber < min || guessingNumber > max) {
            console.log(`Invalid input! Please enter a number between ${min} and ${max}.`);
            continue;
        }
    }
    numberOfAttempts++;

    
        if (guessingNumber < secretNumber) {
            console.log("Too Low! Try again.");
        } else if (guessingNumber > secretNumber) {
            console.log("Too High! Try again.");
        } else {
            console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
            break;
        }
    
        const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    console.log(playAgainPrompt);
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";
    if (playAgain === "yes") {
        startSecretNumberGame();
    } else {
        console.log("Thanks for playing! See you next time.");
    }


}

// Start This Game
secretNumberGuessingGame();
