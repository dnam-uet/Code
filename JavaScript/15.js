snail = function(array) {
    let result = [];
    // enjoy
    let n = array.length;
    let circles = (n-1)/2;
    for(let circle=0; circle <= circles; circle++){
      for(let i=circle; i<n-circle; i++){
        if(array[circle][i]){
          result.push(array[circle][i])
        }
      }
      for(let i=circle+1; i<n-circle; i++){
        if(array[i][n-circle-1]){
          result.push(array[i][n-circle-1])
        }
      }
      for(let i=n-circle-2; i>=circle; i--){
        if(array[n-1-circle][i]){
          result.push(array[n-1-circle][i]); 
        }
      }
      for(let i=n-circle-2; i>=circle+1; i--){
        if(array[i][circle]){
          result.push(array[i][circle]); 
        }
      }
    }
    return result;
  }


/*
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

*/