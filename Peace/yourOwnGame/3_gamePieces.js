(function() {
  // Let's return to our gameBoard now. Step back up to just before we started the reduce mini-sprint to remind yourself what we were doing. 

  // First, note that in this file we still have access to our gameBoard object. This is because in boardBasics.js we put it on the window object. You can test this by trying to print the gameBoard variable to the console:
  // console.log('gameBoard object in gamePieces.js is:', gameBoard);

  // Remember that we'd just used each and filter to find all the gamePieces on the board: "results after filter: [Array[0], Array[0], Array[0], Array[3], Array[0], Array[2], Array[0], Array[0]]" for a gameBoard that has three gamePieces on row 3 and two game pieces on row 5.
  // Having that information scattered throughout a bunch of different arrays seems messy. You can probably think of plenty of cases where we'd want to have all that information collected into a single array. 
    // Wait, that's starting to sound like reduce! We're taking a collection of a bunch of things, and reducing it down to a single thing. 
      // Can you think of a way we could reduce an array filled with arrays to a single array just filled with all the values contained in each subarray? 
      // Hint: what if we tried passing in an empty array as the starting value?

  // This ends our intro to the capstone project. By this point you should be pretty familiar with the gameBoard, the makePiece function, and all four of the main functional programming tools (each, map, filter, and reduce). From here on out, we're intentionally going to give you less guidance. One of the key skills to be a successful engineer is autonomy in accomplishing tasks that are given to you. We want you to get used to that feeling with these upcoming exercises. 


  // 1. Create an array called piecesToAdd that holds the names of each of the pieces we'll create for each player. For example: ['kuddlyKoala', 'babyDino','babyDino', 'babyDino', 'fierceDragon', 'lazyPanda', 'lazyPanda']
// var piecesToAdd = ['sf', 'oak'];
  // 2. Create an array of the playerNames. For example: ['hermoineGranger', 'graceHopper']
// var playerNames = ['Niners' , "Raiders"];

////////////////////////////////////////////////////
/////////Set Up GAME PIECES HERE///////////////////
///////////////////////////////////////////////////
  gameBoard.images2 = 
["file:///Users/user/Desktop/capstoneTake2//images/wolvey.gif","file:///Users/user/Desktop/capstoneTake2//images/storm.gif","file:///Users/user/Desktop/capstoneTake2//images/gambit.gif","file:///Users/user/Desktop/capstoneTake2//images/iceman4.gif"];
  gameBoard.images =
["file:///Users/user/Desktop/capstoneTake2//images/animation.gif","file:///Users/user/Desktop/capstoneTake2//images/vega.gif","file:///Users/user/Desktop/capstoneTake2//images/yoga.gif","file:///Users/user/Desktop/capstoneTake2//images/chunli.gif","file:///Users/user/Desktop/capstoneTake2//images/ryu.gif","file:///Users/user/Desktop/capstoneTake2//images/akuma.gif"]  
var player1piece = gameBoard.images.splice(anyNumMaker(),1);
var player2piece = gameBoard.images.splice(anyNumMaker(),1);
//Define what happens when Player one clicks a gamepiece
//Toggles board, and  highlights the two squares that player 1 can move to... ie. up. and to the left or right.
gameBoard.player1Highlight = function (gameBoard , rowNum , columnNum) {
//define click as the square that was clicked.
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

          // If any piece is clicked on turn it off and reset the board
          gameBoard.isClicked = false;
          gameBoard.defaultBoard();
          console.log("toggle off")
      }
    }
  renderGameBoard(gameBoard);
}
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
var defaultPieces = function () {
    _.each(gameBoard, function (row,rowNum){

      _.each(row, function (square,sqrNum) {
      // loop through every piece and assign an image using a random number as an index
        if (rowNum >= 6) { 
          //random team of the same street fighter chars
          // if ( (rowNum + sqrNum) % 2 === 0 ) makePiece(gameBoard, [rowNum,sqrNum], 'normal' , 'player1' , gameBoard.player1Highlight, player1piece);
          // if ( (rowNum + sqrNum) % 2 === 0 ) makePiece(gameBoard, [rowNum,sqrNum], 'normal' , 'player1' , gameBoard.player1Highlight, gameBoard.images[(anyNumMaker())]);
          if ( (rowNum + sqrNum) % 2 === 0 ) makePiece(gameBoard, [rowNum,sqrNum], 'normal' , 'player1' , gameBoard.player1Highlight, "https://upload.wikimedia.org/wikipedia/commons/a/ae/Yin_yang.gif");
        } else if (rowNum <= 1) {
          // if ( (rowNum + sqrNum) % 2 === 0 ) makePiece(gameBoard, [rowNum,sqrNum], 'normal' , 'player2' , gameBoard.player2Highlight, player2piece);
          // if ( (rowNum + sqrNum) % 2 === 0 ) makePiece(gameBoard, [rowNum,sqrNum], 'normal' , 'player2' , gameBoard.player2Highlight, gameBoard.images2[anyNumMaker()]);
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

//Create a new array of position arrays from squaresWithPieces
var posMap = _.reduce (squaresWithPieces , function (acc, arr , arrNum) {

  var pushArr = acc;
  _.each (arr , function (pos) { pushArr.push(pos) });
  
  return pushArr;

}, []);

// console.log(posMap);


var pieceCount = _.reduce (gameBoard , function (acc,row,rowNum){
  var counter = acc;
  _.reduce (row , function  (acc2,square,sqrNum) {
    if (square.gamePiece) {
      var piece = square.gamePiece
      if (counter[piece.typeOfPiece]) counter[piece.typeOfPiece] ++
      else counter[piece.typeOfPiece] = 1
    }
  })
  return counter;
}, { })
// console.log(pieceCount)
  // 6. Use reduce to create an object that has a tally of all our gamePieces. For example, the result might be: 
  // { babyDino: 3,
  //   impetutousDragon: 2,
  //   scaredKitty: 4,
  //   hobblingPirate:8,
  //   groupHuggers:12 }
    // You should be able to do this from scratch by just using reduce inside of another reduce if you're feeling ambitious!

  // CARRY ON...
  // You're doing great!!! Go ahead and check out the file called '4_gamePlay.js' in the yourOwnGame folder for more fun!
})();
