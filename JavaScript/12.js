function high(x){
    let words = x.toLowerCase();
    words = words.split(" ");
    let highestWord = {
      word: "",
      score: 0
    }
    for(let i=0; i<words.length; i++){
      let scoreWord = 0;
      
      for(let j=0; j<words[i].length; j++){
        scoreWord += words[i].charCodeAt(j) - 96;
      }
      
      if(scoreWord > highestWord.score){
        highestWord.word = words[i];
        highestWord.score = scoreWord;
      }
    }
    return highestWord.word;
  }

  console.log(high("aa b"));
  console.log(high("b aa"))