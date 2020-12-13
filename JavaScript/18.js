let getMaxLessThanK = (n, k) => {
    let result = 0;
    for(let i=n; i>0; i--){
        for(let j=i-1; j>0; j--){
            if((i&j)<k && (i&j)>result){
                result = i&j;
            }
        }
    }
    return result;
}