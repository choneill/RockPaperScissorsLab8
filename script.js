function startGame() {
    computer = Math.floor(Math.random() * 3);
    input = prompt("Type 0 for Rock, 1 for Paper or 2 for Scissors, Choose Now!!!");
    player = parseInt(input)

    if (computer == 0&& player == 1) {
        alert("You beat computer with Paper covers Rock");
      } else if ((computer = 0&& player == 2)) {
        alert("Computer beat you with Rock");
      } else if ((computer = 1&& player == 0)) {
        alert("Computer beat you With Paper");
      } else if ((computer = 1&& player == 2)) {
        alert("You beat computer with Scissor cuts Paper");
      } else if ((computer = 2&& player == 0)) {
        alert("You beat computer with Rock beats Scissor");
      } else if ((computer = 2&& player == 1)) {
        alert("Computer beat you With Scissor");
      } else if ((computer = 0&& player == 0)) {
        alert("It's a tie");
      } else if ((computer = 1&& player == 1)) {
        alert("It's a tie");
      } else if ((computer = 2&& player == 2)) {
        alert("It's a tie");
      } else {
        alert("Invalid input, please try again");
      }
    }

    