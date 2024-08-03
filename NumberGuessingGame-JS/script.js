const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess  number between ${minNum} - ${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please Enter A Valid Number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please Enter A Valid Number");
  } else {
    attempts++;
  

  if (guess < answer) {
    window.alert("TOO LOW! TRY AGAIN!");
  } else if (guess > answer) {
    window.alert("TOO HIGH! TRY AGAIN!");
  } else {
    window.alert(
      `CORRECT! The Answer was ${answer}. It took you ${attempts} attempts`
    );
    running = false;
  }
}
}
