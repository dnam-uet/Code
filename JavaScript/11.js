function towerBuilder(nFloors) {
    // build here
    let tower = [];
    for(let i=0; i<nFloors; i++){
      let element = "";
      for(let j=0; j<nFloors-1-i; j++){
        element += " ";
      }
      for(let j=1; j<= 2*i + 1; j++){
        element += "*";
      }
      for(let j=0; j<nFloors-1-i; j++){
        element += " ";
      }
      tower.push(element);
    }
    return tower;
  }