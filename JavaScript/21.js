function list(names){
    //your code here
    let result = "";
    let andTwo = true;
    if(names.length < 2){
      andTwo = false;
    }
    for(let i=0; i<names.length; i++){
      if(i === names.length-2 && andTwo === true){
        result += names[i].name + ' & ' + names[i+1].name;
        break;
      }
      result += names[i].name + ', '
    }
    if(names.length < 2){
      result = result.slice(0, result.length-2);
    }
    return result;
  }