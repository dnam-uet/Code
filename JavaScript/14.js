function domainName(url){
    //your code here
    
    let begin = 0;
    let end = url.length;
    for(let i=1; i<url.length-1; i++){
      if(url[i] === '/' && url[i-1] === '/' && url[i+1] === 'w' && url[i+2] === 'w'){
        begin = i+5;
      }
      else if(url[i] === '/' && url[i-1] === '/' && url[i+1] !== 'w'){
        begin = i+1; 
      }
      else if(url[i] === 'w' && url[i+1] === '.' && url[i-1] === 'w'){
        begin = i+2;
      }
      else if(url[i] === '/' && url[i-1] === '/'){
        begin = i+1;
      }
      for(let j=begin; j<url.length; j++){
          if(url[j] === '.'){
            end = j;
            break;
          }
      }
    }
    return url.slice(begin, end);
  }