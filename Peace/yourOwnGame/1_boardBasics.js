(function() {
  ///////////////////////////////////////////
  ///////set up board heere//////////////////
  ///////////////////////////////////////////
window.gameBoard = makeGameBoard(8);
  //Use two (nested) each loops to add these pieces to the board. Remember that we have the makePiece function! 
//////////////////////////////////////////
gameBoard.defaultBoard = function () {
  gameBoard.isClicked = false;
  _.each (gameBoard, function (row,rowNum) {
    _.each(row, function (square, sqrNum) {
      //set toggle off on every square
      square.isClicked = false;
      //first and last rows brown
        if (rowNum === 0 || rowNum === 7) square.color = "#B89470";
      //second and third rows red
        if (rowNum === 1 || rowNum === 2) square.color = "#cc0000";
      //4rd and 5th gold
        if (rowNum === 3 || rowNum === 4) square.color = "#ffcc00";
      //6th and 7th green
        if (rowNum === 5 || rowNum === 6) square.color = "#009933";
    })
  ////overwrite the first and last columns brown.
  row[0].color = "#B89470";
  row[7].color = "#B89470";
  //Checker the board with white squares
  // Iterate over each row and each square on that row.
  _.each (gameBoard ,function (row, y){
    _.each(row, function (square, x){
      //if the sum of the square's coordinates is even make that square white.
      if ((y + x) % 2 === 0) 
        square.color = "white";

        //need to rearrange some things so that we can set the pieces up here.
        // //put pieces on the last 2 rows for player 1
        // if (y >= 6) makePiece(gameBoard, [y,x], 'normal' , 'player1' , gameBoard.player1Highlight, "https://upload.wikimedia.org/wikipedia/commons/a/ae/Yin_yang.gif");
        // //put pieces on the first 2 rows for player 2
        // if (y <= 1) makePiece(gameBoard, [y,x], 'normal' , 'player2' , gameBoard.player2Highlight, "http://graphics.elysiumgates.com/images/peaceindextitlegraphic.gif");        }

      
    })
  })
})}



//invoke defaultBoard///
gameBoard.defaultBoard();
//first turn belongs to player one.
gameBoard.turnCount = 0;
//set player scores.  Not sure why i put it in the global scope...>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
player1Score = 0;
player2Score = 0;


  })();
