function findMissingLetter(array)
{
  let lostElement;
  for(let i=1; i<array.length; i++){
    if(array[i].charCodeAt(0)-array[i-1].charCodeAt(0) !== 1) lostElement = array[i].charCodeAt(0);
  }
  return String.fromCharCode(lostElement-1);
}