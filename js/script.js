// Business logic
// function Player(name,score,wins) {
//   this.name = name;
//   this.score = score;
//   this.wins = wins;
// }
//
// var pigGame = {
//   player1Score: 0,
//   player2Score: 0,
//   playerUp: 1,
//   turnScore: 0,
// };
//
//
// function Rolldie () {
//   die1 = Math.floor(Math.random()*6) +1;
//   return die1;
// }
//
// var playerRoll = function() {
//   var roll = Rolldie();
//   if(roll ===1){
//     pigGame.turnScore = 0;
//     alertEndTurn();
//     switchPlayer();
//   } else {
//     pigGame.turnScore +=roll;
//     if (pigGame.playerUp === 1) {
//       if (pigGame.turnScore + pigGame.player 1 Score >= 100) {
//         alertWinner(1);
//       }
//     } else if (pigGame.turnScore + pigGame.player 2 Score >= 100) {
//       alertWinner(2);
//   }
//   }
//   return roll;
// }
//
// function holdThePig() {
//   var currentPlayer = pigGame.playerUp;
//   if (currentPlayer ===1) {
//     pigGame.player1Score += pigGame.turnScore;
//   } else {
//     pigGame.player2Score += pigGame.turnScore;
//   }
//   pigGame.turnScore = 0;
//   switchPlayer();
// }
//
//
// function switchPlayer () {
//   if (pigGame.playerUp === 1) {
//     $("#player 1 Button").hide();
//     $("#player 2 Button").show();
//     pigGame.playerUp = 2;
//
//   } else {
//     $("#player 2 Button").hide();
//     $("#player 1 Button").show();
//     pigGame.playerUp = 1;
//
//   }
// }
//
// function resetGame() {
//   pigGame.player1Score = 0;
//   pigGame.player2Score = 0;
//   pigGame.playerUp = 1;
//   pigGame.turnScore = 0;
// }
//
//
// // User Logic
//
//
// function alertEndTurn(){
//   alert("Sorry - you rolled a 1.  Your score remains the same and your turn is over.");
//   $(".playerStatus").text(pigGame.playerUp);
// }
//
// function alertWinner(playerNumber) {
//   alert("Player " + playerNumber + " is the BIG winner!!");
//   resetGame();
//   $(".gameStatusDisplay").text(0);
// }
//
// $(document).ready(function() {
//
//   $("form#pigForm").submit(function(event){
//     var player 1 Name = $("input#player 1 Name").val();
//     var player 2 Name = $("input#player 2 Name").val();
//       $("span#player 1 Name").text(player 1 Name);
//       $("span#player 2 Name").text(player 2 Name);
//       $("#player 2 Button").hide();
//       $("#player 1 Button").show();
//       $(".playerStatus").text(pigGame.playerUp);
//       event.preventDefault();
//
//     var nameHolder = new Names(player 1 Name, player 2 Name);
//   })
//
//
//   $(".rollPig").click(function() {
//     pigResult = playerRoll();
//     $(".rollResult").text(pigResult);
//     $(".turnScore").text(pigGame.turnScore);
//
//   });
//
//   $(".holdPig").click(function(){
//     holdThePig();
//     $("rollResult").text("");
//     $(".player 1 Score").text(pigGame.player 1 Score);
//     $(".player 2 Score").text(pigGame.player 2 Score);
//     $(".playerStatus").text(pigGame.playerUp);
//   });
// });
//Business Logic
function Player(name,score,wins){
   this.name=name;
   this.score=score;
   this.wins=wins;
  }
  Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  // this.changeturn();
  } else {
  this.tempscore += this.roll;
  }
}
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  // this.changeturn();
  alert(this.playerName + ", your turn is over, pass the mouse!");
}

Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}

var clearValues = function(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}
//User Logic
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".player-console").show();
    $(".start-menu").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  $("button#new-game").click(function(event){
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

});
