digPow = (n, p) => {

    // Declare variable
    let sumPow = 0;
    let stringOfN = "" + n;
    let elements = stringOfN.split('');
    let count = p-1;

    // Change old array to new array 
    // Calculate sumPow
    let newElements  = elements.map(element => {
        count ++;
        let newElement =  parseInt(element)**count;
        sumPow += newElement;
        return newElement;
    })

    return sumPow % n === 0 ? sumPow/n : -1; 
}

console.log(digPow(89,1));
console.log(digPow(92,1));
console.log(digPow(695,2));
console.log(digPow(46288,3));