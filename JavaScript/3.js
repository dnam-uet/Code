function validatePIN (pin) {
    // check length of password: 4 or 6.
    // check type in password: only number
    for(let i=0; i<pin.length; i++){
        if(pin[i].charCodeAt(0) < 48 || pin[i].charCodeAt(0) > 57) return false;
    }
    return (pin.length === 4 || pin.length === 6);
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
