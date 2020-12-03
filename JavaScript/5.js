// Fail
function taskOfPairing(freq) {
    // Write your code here
    let countPair = 0;
    let countOffset = [];
    for(let i=0; i< freq.length; i++){
        countPair += parseInt(freq[i]/2);
        countOffset.push(freq[i]%2 + "");
    }
    for(let i=0; i<countOffset.length-1; i++){
        if(countOffset[i] + countOffset[i+1] === 2){
            countPair++;
            countOffset[i+1] = 0;
            countOffset[i] = 0;
        }
    }
    return countPair;
}


console.log(taskOfPairing([3,5,4,3]));

console.log(taskOfPairing([5,6,2]));

console.log(taskOfPairing([6,5,3,4,2]));
let arr = [1,2,3].slice(0,0);
console.log(arr);