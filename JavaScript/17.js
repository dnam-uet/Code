var moveZeros = function (arr) {
    // TODO: Program me
    let count = 0;
    arr = arr.filter(element => {
      if(element === 0) count++;
      return element !== 0;
    })
    for(let i=0; i<count; i++) arr.push(0);
    return arr;
  }