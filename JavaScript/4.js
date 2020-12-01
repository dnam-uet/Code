function duplicateCount(text){
    //convert string -> case. Ex: aBcD -> abcd
    let characters = text.toLowerCase().split('');
    
    // sort string dabc -> abcd
    characters.sort((a,b) => {
        return a.charCodeAt(0) - b.charCodeAt(0);
    });

    // create array - check element === element after
    let corrects = [];
    for(let i=0; i<characters.length-1; i++){
        if(characters[i] === characters[i+1]) corrects.push(1);
        else corrects.push(0);
    }

    // count duplicate
    let count = 0;
    let flag = false;
    for(let i=0; i<corrects.length; i++){
        if(corrects[i] === 1 && flag === false){
            flag = true;
            count++;
        }
        if(corrects[i] === 0) flag = false;
    }
    
    return count;
}

console.log(duplicateCount("aBDcAs"));