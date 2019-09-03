function dwarfRollCall(dwarves) {
  var dwarfNumber = 0;
  var dwarfString = [];
  while(dwarfNumber < dwarves.length) {
  dwarfString.push([dwarfNumber+1] + ". " + dwarves[dwarfNumber] + " ");
  dwarfNumber++;
}
  return dwarfString.join("");
}


function summonCaptainPlanet(planeteerCalls){
  var planeteerNumbers = 0;
  var planeteerString = [];
  while(planeteerNumbers < planeteerCalls.length){
  planeteerString.push(planeteerCalls[planeteerNumbers].toUpperCase() + "!");
  planeteerNumbers++;
}
return planeteerString;
}


function longPlaneteerCalls(words) {
  if (words.length > 4) {
    return true;
  }
  else {
    return false;
  }
}

function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "camembert"];
  
  for (let i = 0; i<foods.length; i++){
   for (let j= 0; j<cheeses.length; j++){
   if (foods[i]===cheeses[j]) {
    return foods[i];
  }
   }
  }
    return "no cheese!";
}


function wordsWithB(words) {
  
}

