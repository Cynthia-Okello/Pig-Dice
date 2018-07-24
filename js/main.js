// business logic
function rollDie(){
  return  Math.floor(Math.random()*6)+1;
};


//player1
var player1Rolls=0;
var player1Score=0;

//player2
var player2Rolls=0;
var player2Score=0;






// user logic

$ (document).ready(function(){

  // player 1 roll event
  $("#player1-roll").click(function(e){
    e.preventDefault();

    player1Rolls=player1Rolls+1;
    player1Score=player1Score+rollDie();
    $("#player2-roll").hide(300);
    $("#player1-hold").show(300);

    $("#p1Tr").text(player1Rolls);
  

  });

// player 1 hold event
  $("#player1-hold").click(function(e){
    e.preventDefault();
    $("#player1-roll").hide(300);
    $("#player2-roll").show(300);
    $("#player1-hold").hide(300);

    $("#p1r").text(player1Score);
  });



  // player 2 roll event
  $("#player2-roll").click(function(e){
    e.preventDefault();

    player2Rolls=player2Rolls+1;
    player2Score=player2Score+rollDie();
    $("#player1-roll").hide(300);
    $("#player2-hold").show(300);
    $("#p2Tr").text(player2Rolls);
  });

// player 2 hold event
  $("#player2-hold").click(function(e){
    e.preventDefault();
    $("#player2-roll").hide(300);
    $("#player1-roll").show(300);
    $("#player2-hold").hide(300);

    $("#p2r").text(player2Score);
  });

});
