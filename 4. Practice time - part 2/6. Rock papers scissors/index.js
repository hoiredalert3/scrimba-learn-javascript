let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function pickRandomHand() {
  let randomNumber = Math.floor(Math.random() * hands.length);

  return hands[randomNumber];
}

console.log(pickRandomHand());
