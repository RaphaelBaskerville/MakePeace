(function() {
  // When a user clicks on a square, the app will invoke a function on the global scope called 'clickHandler'. 

      window.clickHandler = function(positionArr) {
        //define variables to aid legibility
        var rowClicked = positionArr[0];
        var columnClicked = positionArr[1];
        var clicked = gameBoard[rowClicked][columnClicked];
        var old = clicked.pieceToMove
        console.log('the user clicked on square:', gameBoard[rowClicked][columnClicked]);
        //  alert the user that you cant move to an un-highlighted square.
        if (gameBoard.isClicked && clicked.color !== 'grey' && !clicked.gamePiece) return alert('nope, never, cant do it');

        //  if the clicked square has a piece on it
        //  highlight the squares that can be moved to.
        if (clicked.gamePiece) clicked.gamePiece.highlight(gameBoard,rowClicked,columnClicked);
        //  if the board is toggled and the clicked square is NOT grey. 
        //  if the user clicks a grey square move the piece there.
        if (clicked.color === 'grey') {
          // console.log ('big old test' , clicked.position, clicked.pieceToMove.typeOfPiece , clicked.pieceToMove.playerBelongsTo , clicked.pieceToMove.imageURL)
          // console.log("clicked a grey square");
          // console.log(clicked)
          // If its player1's turn give player2 a point for getting hugged.
          if (gameBoard.turnCount % 2 === 0) {
          // If the other team had a piece on the grey square remove it and 
          // give the other team a point
            if (clicked.gamePiece.playerBelongsTo === "player2") {
              player2Score++;
            alert("Team Yin Yang hugged Team Peace \nTeam Peace gets 1 point \nbut loses the hugged piece and must make a move\n\nYin Yang Score: " + player1Score + "\nPeace Score: " + player2Score);

            }
          // otherwise it is player2's turn; if there is a piece on there give player1 a point for getting hugged.
          } else if (clicked.gamePiece.playerBelongsTo === "player1") {
            player1Score++;
            alert("Team Peace hugged Team Yin Yang \nTeam Yin Yang gets 1 point \nbut loses the hugged piece and must make a move\n\nYin Yang Score: " + player1Score + "\nPeace Score: " + player2Score);
          };
          //after alerting the change in score we execute the hug.

          //  make a new piece on the new square which over-writes the hugged piece that was there.
          clicked.gamePiece = makePiece(gameBoard , clicked.position , old.typeOfPiece , old.playerBelongsTo , old.highlight , old.imageURL);
          //  delete the piece that was moved.
          gameBoard[old.pos[0]][old.pos[1]].gamePiece = "";
          // reset the the square's piece to move property.  might be pointless because the board gets reset on the next line.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
          clicked.pieceToMove = "";
          // reset the whole board
          gameBoard.defaultBoard();
          // switch turns.
          gameBoard.turnCount++;
          //logs player ones turn is true/false
          console.log('player1 turn is ' + (gameBoard.turnCount % 2 === 0))
          
        } 

        console.log('gameboard toggle is: ', gameBoard.isClicked)
        renderGameBoard(gameBoard);
      };

})();
