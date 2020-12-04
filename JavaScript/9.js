function orderWeight(strng) {
    // your code
    let elements = strng.split(" ");
    elements.sort((a, b) => {
        let newA = 0, newB = 0;
        for(let i=0; i<a.length; i++){
            newA += parseFloat(a[i]);
            newA += parseFloat(a[i]) * 10**(-i-1);
        }
        for(let i=0; i<b.length; i++){
            newB += parseFloat(b[i]);
            newB += parseFloat(b[i]) * 10**(-i-1);
        }
        newA += a.length >= 2 ? parseFloat(a.length) * 10**(-a.length-2) : 0;
        newB += b.length >= 2 ? parseFloat(b.length) * 10**(-b.length-2) : 0;
        return newA - newB;
    })
    return elements.join(" ");
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));