function expandedForm(num) {
    // Your code here
    num = num + '';
    let characters = num.split('');
    characters.reverse();

    let results = "";
    for(let i=characters.length-1; i>=0; i--){
        if(characters[i] !== "0"){
            results = results + parseInt(characters[i])*(10**i) + " + ";
        }
    }
    results = results.slice(0,results.length-3);
    return results;
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'