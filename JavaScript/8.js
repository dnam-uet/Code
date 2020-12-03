function toCamelCase(str){
    let elements1 = str.split('-');
    let elements2 = str.split('_');

    let elements = elements1.length > 1 ? elements1 : elements2;
    
    let camelCase = elements === elements2 ? false : true;

    if(elements === ''){
      return "An empty string was provided but not returned"
    }

    elements = elements.map((element, index) => {
        element = element.toLowerCase();
        return element[0].toUpperCase() + element.slice(1,element.length);
    })
    
    elements = elements.join('');
    if(camelCase){
        elements = elements[0].toLowerCase() + elements.slice(1,elements.length);
    }
    return elements;
}

console.log(toCamelCase("the-stealth-warrior")) // returns "theStealthWarrior"

console.log(toCamelCase("The_Stealth_Warrior")) // returns "TheStealthWarrior"