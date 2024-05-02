// nested if else
let winningNumber = 20;
let userGuess = +prompt("Guess a number");
if (userGuess === winningNumber){
    console.log("your guess is right !! ");
}else
  if (userGuess > winningNumber){
    console.log("your guess is too high !!");
}
else
  if(userGuess <  winningNumber){
    console.log("your guess is low!!");

}
