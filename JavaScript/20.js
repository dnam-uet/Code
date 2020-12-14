function validSolution(board){
    //TODO
    for(let i=0; i<board.length; i++){
      let sum = 0;
      for(let j=0; j<board[i].length; j++){
        sum += board[i][j];
      }
      if(sum !== 45) return false;
    }
    for(let i=0; i<board.length; i++){
      let sum = 0;
      for(let j=0; j<board.length; j++){
        sum += board[j][i];
      }
      if(sum !== 45) return false;
    }
    for(let i=1; i<board.length-1; i+=3){
      for(let j=1; j<board.length-1; j+=3){
        let sum = 0;
        sum += board[i][j] + board[i-1][j-1] + board[i-1][j] + board[i-1][j+1] + board[i][j-1] + board[i][j+1] + board[i+1][j-1] + board[i+1][j] + board[i+1][j+1];
        if(sum !== 45) return false;
      }
    }
    return true;
  }