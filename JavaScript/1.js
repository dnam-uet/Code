// Replace Alphabet With Position


function alphabetPosition(text) {
    text = text.toUpperCase();
    let array = text.split('');
    array = array.filter(element => {
        return element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90
    })
    let result = "";
    for(let i=0; i< array.length; i++){
      result = result + (array[i].charCodeAt(0) - 64) + " ";
    }
    return result.slice(0,result.length-1);
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."));