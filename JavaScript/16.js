function perimeter(n) {
    let sum = 0;
    let fib1 = 1, fib2 = 1;
    for(let i=0; i<=n; i++){
        if(i%2===0){
            sum += fib1;
            fib1 = fib1 + fib2;
        }
        else{
            sum += fib2;
            fib2 = fib1 + fib2;
        }
    }
    return sum*4;
}

console.log(sumFibNum(0));
console.log(sumFibNum(5));
console.log(sumFibNum(7));
console.log(sumFibNum(20));