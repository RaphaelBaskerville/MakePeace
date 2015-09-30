(function() {
  
////////////////////////////////////////////////////
/////////Set Up GAME PIECES HERE///////////////////
///////////////////////////////////////////////////
//create 2 different image arrays.  Not actually using these currently

//X-Men gifs
  gameBoard.images2 = 
    ["file:///Users/user/Desktop/capstoneTake2//images/wolvey.gif","file:///Users/user/Desktop/capstoneTake2//images/storm.gif","file:///Users/user/Desktop/capstoneTake2//images/gambit.gif","file:///Users/user/Desktop/capstoneTake2//images/iceman4.gif"];
//street fighter gifs    
  gameBoard.images =
    ["file:///Users/user/Desktop/capstoneTake2//images/animation.gif","file:///Users/user/Desktop/capstoneTake2//images/vega.gif","file:///Users/user/Desktop/capstoneTake2//images/yoga.gif","file:///Users/user/Desktop/capstoneTake2//images/chunli.gif","file:///Users/user/Desktop/capstoneTake2//images/ryu.gif","file:///Users/user/Desktop/capstoneTake2//images/akuma.gif"]  
//picks a "random" number and assigns a player with an image for their pieces.  Not using this at the moment.   
var player1piece = gameBoard.images.splice(anyNumMaker(),1);
//picks a "random" number and assigns a player with an image for their pieces.  Not using this at the moment.
var player2piece = gameBoard.images.splice(anyNumMaker(),1);


//Define what happens when Player one clicks a gamepiece
//Toggles board, and  highlights the two squares that player 1 can move to... ie. up. and to the left or right.
gameBoard.player1Highlight = function (gameBoard , rowNum , columnNum) {
//define clicked as the square that was clicked.
var clicked = gameBoard[rowNum][columnNum];
  

    //if it's player ones turn
    if(gameBoard.turnCount % 2 === 0) {
      // Check if the gameboard is NOT clicked
      // It might be simpler to reverse the logic but oh well
      if (!gameBoard.isClicked) {
          //if it isnt clicked 
          //resets the board... this might be pointless
          gameBoard.defaultBoard();
          //toggle set to on/true
          gameBoard.isClicked = true;
          
          //highlight the square up and to the left.

          //if there is a square there.
          if (gameBoard[rowNum - 1][columnNum - 1]) {
            //color the square grey and set the piece object as a property on it.
            gameBoard[rowNum - 1][columnNum - 1].color = 'grey';
            gameBoard[rowNum - 1][columnNum - 1].pieceToMove = clicked.gamePiece;
          }
          //highlight the square up and to the right.
          //rinse and repeat.
          if (gameBoard[rowNum - 1][columnNum + 1]) {
            
            gameBoard[rowNum - 1][columnNum + 1].color = 'grey';
            gameBoard[rowNum - 1][columnNum + 1].pieceToMove = clicked.gamePiece;
          }          

      } else {

          // If any piece/board is clicked on turn it off and reset the board
          gameBoard.isClicked = false;
          gameBoard.defaultBoard();
          console.log("toggle off")
      }
    }
  renderGameBoard(gameBoard);
}
//We could probably make one highlight that works for both players, but it also might be more complicated that way.

//Highlights the squares player2 can move to. ie down.
gameBoard.player2Highlight = function (gameBoard , rowNum , columnNum) {
  console.log('player 2 clicked')
//define click as the square that was clicked.
var clicked = gameBoard[rowNum][columnNum];
  

    //if it's player ones turn
    if(gameBoard.turnCount % 2 !== 0) {
      // Check if the gameboard is NOT clicked
      // It might be simpler to reverse the logic but oh well
      if (!gameBoard.isClicked) {
          //if it isnt clicked 
          //resets the board... this might be pointless
          gameBoard.defaultBoard();
          //toggle set to on/true
          gameBoard.isClicked = true;
          
          //highlight the square up and to the left.

          //if there is a square there.
          if (gameBoard[rowNum + 1][columnNum - 1]) {
            //color the square grey and set the piece object as a property on it.
            gameBoard[rowNum + 1][columnNum - 1].color = 'grey';
            gameBoard[rowNum + 1][columnNum - 1].pieceToMove = clicked.gamePiece;
          }
          //highlight the square up and to the right.
          //rinse and repeat.
          if (gameBoard[rowNum + 1][columnNum + 1]) {
            
            gameBoard[rowNum + 1][columnNum + 1].color = 'grey';
            gameBoard[rowNum + 1][columnNum + 1].pieceToMove = clicked.gamePiece;
          }          

      } else {

          // If any piece is clicked on turn it off and reset the board
          gameBoard.isClicked = false;
          gameBoard.defaultBoard();
          console.log("toggle off")
      }
    }
  renderGameBoard(gameBoard);
}


//Set up the initial position of the pieces 
var defaultPieces = function () {
  // iterate through each row and each square on that row
    _.each(gameBoard, function (row,rowNum){
      _.each(row, function (square,sqrNum) {

      // If on the last 2 rows assign the piece to player one, attach the highlight method to the piece here, and a yin yang gif.
        if (rowNum >= 6) { 
          // only assign every other square a piece
          if ( (rowNum + sqrNum) % 2 === 0 ) makePiece(gameBoard, [rowNum,sqrNum], 'normal' , 'player1' , gameBoard.player1Highlight, "https://upload.wikimedia.org/wikipedia/commons/a/ae/Yin_yang.gif");
          //if on the first 2 rows, assign pieces for player 2
        } else if (rowNum <= 1) {
          //only on every other square
          if ( (rowNum + sqrNum) % 2 === 0 ) makePiece(gameBoard, [rowNum,sqrNum], 'normal' , 'player2' , gameBoard.player2Highlight, "http://graphics.elysiumgates.com/images/peaceindextitlegraphic.gif");        }
      })
  })
}
//invoke default pieces///
defaultPieces();



//Create a list of arrays each contaning the coordinates for every square that has a piece on it

// iterate through the rows on the gameBoard, 
var squaresWithPieces = _.map (gameBoard , function (row,rowNum) {
  
  // Pass each row into filter and save the list of pieces as FILTERED.
  var filtered = _.filter(row , function (square,sqrNum) {
    // Only return a square with piece on it
    return square.gamePiece
  })
  
  //Function returns an array of position arrays here  
  return _.map (filtered , function (square,sqrNum) {
  // Inner map returns an array of each pieces position from our filtered list by row.
    return square.position;

  })
})

// console.log("squares with pieces: " , squaresWithPieces);


//Learning how to flatten an array. 

//Create a new array of position arrays from squaresWithPieces
var posMap = _.reduce (squaresWithPieces , function (acc, arr , arrNum) {
  //set an array that we can push into as the accumulation.
  var pushArr = acc;
  //push each element in the sub array of sub arrays into our new array
  _.each (arr , function (pos) { pushArr.push(pos) });
  //return the push array so it is stored as the accumulation.
  return pushArr;

}, []);

// console.log(posMap);

// Use reduce to create an object that has a tally of all our gamePieces. For example, the result might be: 
var pieceCount = _.reduce (gameBoard , function (acc,row,rowNum){
          // Assign counter as our accumulation.
          var counter = acc;
          //inner reduce acts as a filter not a reduce.
          //takes in a row and iterates through each square.
          _.reduce (row , function  (acc2,square,sqrNum) {
              // if there is a piece on the square
              if (square.gamePiece) {
                //name the piece piece 
                var piece = square.gamePiece
                //if the counterobject has a property key for this type of object, increment it.
                if (counter[piece.typeOfPiece]) counter[piece.typeOfPiece] ++
                //if the property doesnt exist, create it and set it to 1.
                else counter[piece.typeOfPiece] = 1
              }
          })
          //after the inner reduce has checked a row, return the counter object 
          //so it will be saved as the accumulated for the next iteration.
          return counter;
      }, { })

// console.log(pieceCount)

})();
